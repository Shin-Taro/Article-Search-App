import React from "react";
import Container from "./Container";
import List from "./List";
import Search from "./Search";

const ArticleSearcher = () => {
  const blockName = "articleSearcher";
  return (
    <div className={blockName}>
      <h1 className={`${blockName}__title`}>Search for articles in Qiita &amp; Stack Overflow</h1>
      <Search />
      <Container>
        <List />
      </Container>
    </div>
  );
};

export default ArticleSearcher;