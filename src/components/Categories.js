import React from 'react';
import styled, { css } from 'styled-components';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Category = styled.div`
  padding: 28px 14px;
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      font-weight: bold;
    `}
`;

function Categories({ category, onSelect }) {
  return (
    <CategoriesBlock>
      {categories.map((item) => (
        <Category
          key={item.name}
          onClick={() => onSelect(item.name)}
          active={category === item.name}
        >
          {item.text}{' '}
        </Category>
      ))}
    </CategoriesBlock>
  );
}

export default Categories;
