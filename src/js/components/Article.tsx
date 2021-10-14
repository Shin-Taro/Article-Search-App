import React from "react";

type Props = {
  article:Article
};

const Article = ({article}:Props) => {
  const blockName:string = "article";

  const renderTags = ():JSX.Element[] => {
    const tags:JSX.Element[] = article.tags.map(item => {
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
          <span className={`${blockName}__userName`}>{article.user.id}</span>
          <br className ="hidden--pc"/>
          <span className={`${blockName}__date`}>投稿：{article.created_at}</span>
          <br className ="hidden--pc"/>
          {renderTags()}
        </p>
        <h1 className={`${blockName}__title`}>{article.title}</h1>
        <div 
          className={`${blockName}__body`} 
          dangerouslySetInnerHTML={{__html: article.rendered_body}} 
        />
      </div>
      <a className={`${blockName}__link`} href={article.url} target="_blank"></a>
    </article>
  );
};

export default Article;