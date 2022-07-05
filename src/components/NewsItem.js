import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin: 28px;
    img {
      object-fit: cover;
      width: 280px;
      height: 280px;
    }
  }
  .contents {
    h2 {
      margin: 28px;
      a {
        color: black;
      }
    }
    p {
      margin: 28px;
    }
  }
  & + & {
    border-top: 1px solid #dcbd85;
  }
`;

function NewsItem({ article }) {
  const { title, description, url, urlToImage } = article;

  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank">
            <img src={urlToImage} alt="썸네일" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
}

export default NewsItem;
