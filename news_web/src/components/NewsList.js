import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  padding: 28px;
`;

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160',
};

function NewsList({ category }) {
  const [loading, setLoding] = useState(false);
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoding(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=179ab5e7e9214b62b8f71488bec3fafd`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoding(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem article={article} key={article.url} />
      ))}
    </NewsListBlock>
  );
}

export default NewsList;
