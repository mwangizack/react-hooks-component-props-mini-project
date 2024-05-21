import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((postObj) => (
        <Article
          key={postObj.id}
          title={postObj.title}
          date={postObj.date}
          preview={postObj.preview}
          minutes={postObj.minutes}
        />
      ))}
    </main>
  );
}

export default ArticleList;
