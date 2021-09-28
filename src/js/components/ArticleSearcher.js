import React,  { useEffect, useState } from "react";
import Article from "./Article";
import Container from "./Container";
import List from "./List";
import Search from "./Search";

const qiitaUrl = "https://qiita.com/api/v2/items?page=1&per_page=10&query="

const apiToken = "e361893afc81fb5184aa0c3860f528a0f8473722";

const ArticleSearcher = () => {
  const blockName = "articleSearcher";
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const testUrl = qiitaUrl + "stocks%3A%3E20";
    fetch(testUrl,
      {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      }
    )
    .then(response => {
      if(!response.ok){
        throw new Error(response.message);
      }
      return response.json();
    })
    .then(json => {
      setArticles(json);
      setLoading(false);

      console.log(json);
    })
    .catch(error => {
      setError(error);
      setLoading(false);

      console.log(error);
    });
  }, []);

  const rederArticles = () => {
    let elements

    if (error) {
      elements =  <div className={`${blockName}__message`}>{error}</div>
    } else if (loading) {
      elements = <div className={`${blockName}__message`}>loading...</div>
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

  const searchArticles = (value) => {
    const requestUrl = qiitaUrl + value;
    setLoading(true);
    setError(null);

    fetch(requestUrl,
      {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      }
    )
    .then(response => {
      if(!response.ok){
        throw new Error(response.message);
      }
      return response.json();
    })
    .then(json => {
      setArticles(json);
      setLoading(false);
      console.log(json);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
      console.log(error);
    });
  };

  return (
    <div className={blockName}>
      <h1 className={`${blockName}__title`}>Search for articles in Qiita &amp; Stack Overflow</h1>
      <Search
        searchArticles={searchArticles}
      />
      <Container>
        <List
          renderItems={rederArticles}
        />
      </Container>
    </div>
  );
};

export default ArticleSearcher;