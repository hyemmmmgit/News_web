import React from 'react';
import styled from 'styled-components';

const MemoListTemplateBlock = styled.div`
  width: 34vw;
  right: 0;
  top: 0;
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  .title {
    margin: 28px;
  }
`;

function MemoListTemplate({ children }) {
  return (
    <MemoListTemplateBlock>
      <h1 className="title">메모하기</h1>
      {children}
    </MemoListTemplateBlock>
  );
}

export default MemoListTemplate;
