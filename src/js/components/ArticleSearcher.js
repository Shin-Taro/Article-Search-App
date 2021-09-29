import React,  { useEffect, useState } from "react";
import Article from "./Article";
import Container from "./Container";
import Controller from "./Controller";
import Header from "./Header";
import List from "./List";
import Presets from "./Presets";
import Search from "./Search";

const apiToken = "e361893afc81fb5184aa0c3860f528a0f8473722";

const ArticleSearcher = () => {
  const blockName = "articleSearcher";
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [keyWord, setKeyWord] = useState("新着");
  const [count, setCount] = useState(1);
  const [value, setValue] = useState("created%3A%3E2021-08-01");

  const qiitaUrl = `https://qiita.com/api/v2/items?page=${count}&per_page=10&query=`
  const requestUrl = `https://qiita.com/api/v2/items?page=${count}&per_page=10&query=${value}`

  const requestApi = (url) => {
    fetch(url,
      {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      }
    )
    .then(response => {
      if(!response.ok){
        throw new Error(response);
      }
      console.log(response);
      return response.json();
    })
    .then(json => {
      setArticles(json);
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
      console.log(error);
    });
  };

  useEffect(() => {
    requestApi(requestUrl);
  }, []);

  const searchArticles = value => {
    const escapedValue = encodeURIComponent(value);
    const requestUrl = qiitaUrl + escapedValue;

    setValue(escapedValue);
    setCount(1);
    setLoading(true);
    setError(null);
    setKeyWord(value);
    requestApi(requestUrl);
  };

  const runPresets = preset => {
    const requestUrl = qiitaUrl + preset.value;

    setValue(preset.value);
    setCount(1);
    setLoading(true);
    setError(null);
    setKeyWord(preset.name);
    requestApi(requestUrl);
  };

  const renderArticles = () => {
    let elements;
    if (error) {
      elements =  <div className={`${blockName}__message`}>{error.message}</div>
    } else if (loading) {
      elements = <div className={`${blockName}__message`}>Now loading...</div>
    } else if (articles.length === 0){
      elements = <div className={`${blockName}__message`}>検索結果：該当なし</div>
    } else {
      elements = articles.map(article => {
        return(
          <li key={article.id} className="list__item">
            <Article
              article={article}
            />
          </li>
        );
      });
    }
    return elements;
  };

  return (
    <div className={blockName}>
      <Header />
      <Search
        searchArticles={searchArticles}
      />
      <Presets
        runPresets={runPresets}
      />
      <Container>
        <h1 className="container__title">{keyWord}</h1>
        <Controller
          count={count}
        />
        <List
          renderItems={renderArticles}
        />
      </Container>
    </div>
  );
};

export default ArticleSearcher;