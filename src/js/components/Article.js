import React from "react";

const Article = ({article}) => {
  const blockName = "article";
  return(
    <div className={blockName}>
      <h1 className={`${blockName}__title`}>{article.title}</h1>
      <p>{article.user.name}</p>
    </div>
  );
};

export default Article;