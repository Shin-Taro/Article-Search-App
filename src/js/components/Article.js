import React from "react";

const Article = ({article}) => {
  const blockName = "article";

  const renderTags = () => {
    const tags = article.tags.map(item => {
      return(
        <span key={article.id + item.name} className={`${blockName}__tag`}>{item.name}</span>
      );
    });
    return tags;
  };

  return(
    <article className={blockName}>
      <div className={`${blockName}__avatar`}>
        <img className={`${blockName}__image`} src={article.user.profile_image_url} />
      </div>
      <div className={`${blockName}__container`}>
        <p className={`${blockName}__info`}>
          <span className={`${blockName}__userName`}>{article.user.name}</span>
          <span className={`${blockName}__date`}>投稿：{article.created_at}</span>
          <span className={`${blockName}__date`}>更新：{article.updated_at}</span>
          {renderTags()}
        </p>
        <h1 className={`${blockName}__title`}>{article.title}</h1>
        <div 
          className={`${blockName}__body`} 
          dangerouslySetInnerHTML={{__html: article.rendered_body}} 
        />
      </div>
    </article>
  );
};

export default Article;