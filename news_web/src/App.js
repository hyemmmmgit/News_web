import { useCallback, useRef, useState } from 'react';
import NewsList from './components/NewsList';
import styled, { createGlobalStyle } from 'styled-components';
import Categories from './components/Categories';
import MemoListTemplate from './components/MemoListTemplate';
import MemoList from './components/MemoList';
import MemoListInsert from './components/MemoListInsert';

const GlobalStyle = createGlobalStyle`
  * {
    margin : 0;
    padding : 0;
    box-sizing : border-box;
    color: #123244;
  }
  body {
    background-color: #efd7ad;
  }
  a {
    color:inherit;
  }
  `;

const Body = styled.div`
  display: flex;
`;

const News = styled.div`
  width: 66vw;
`;

function App() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);

  const [memos, setMemos] = useState([
    {
      id: 1,
      text: '최악의 습관 5가지 1. 가공식품 많이 먹기 2. 물 안 마시기 3. 과음하기 4. 스트레스 관리 안 하기 5. 운동부족',
    },
  ]);
  const [filtered, setFiltered] = useState('');

  const nextID = useRef(2);

  function onInsert(text, id) {
    const memo = {
      id: nextID.current,
      text,
    };
    setMemos(memos.concat(memo));
    nextID.current++;
  }

  function onRemove(id) {
    setMemos(memos.filter((memo) => memo.id !== id));
  }

  function onUpdate(id) {
    setFiltered(memos.find((memo) => id === memo.id));
  }

  return (
    <>
      <GlobalStyle />
      <Body>
        <News>
          <Categories category={category} onSelect={onSelect} />
          <NewsList category={category} />
        </News>
        <MemoListTemplate>
          <MemoListInsert onInsert={onInsert} filtered={filtered} />
          <MemoList memos={memos} onRemove={onRemove} onUpdate={onUpdate} />
        </MemoListTemplate>
      </Body>
    </>
  );
}

export default App;
