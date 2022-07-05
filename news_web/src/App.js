import { useCallback, useState } from 'react';
import NewsList from './components/NewsList';
import { createGlobalStyle } from 'styled-components';
import Categories from './components/Categories';

function App() {
  const GlobalStyle = createGlobalStyle`
  * {
    margin : 0;
    padding : 0;
    box-sizing : border-box;
  }
  `;

  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <GlobalStyle />
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
}

export default App;

//약간 색다르게 바꿔보기
