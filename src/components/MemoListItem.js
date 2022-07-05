import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-bottom: 28px;
  margin: 0 4px 14px;
`;

const MemoListItemBlock = styled.div`
  flex: 1;
  padding: 14px;
  width: 140px;
  height: 140px;
  background-color: #48a0b6;
  overflow: hidden;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  div {
    flex: 1;
    cursor: pointer;
    text-align: center;
    border: 1px solid #046683;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const UpdateBtn = styled.div``;

const DeleteBtn = styled.div``;

function MemoListItem({ memo, onRemove, onUpdate }) {
  return (
    <Container>
      <MemoListItemBlock>{memo.text}</MemoListItemBlock>
      <BtnBox>
        <UpdateBtn
          onClick={() => {
            onUpdate(memo.id);
          }}
        >
          가져오기
        </UpdateBtn>
        <DeleteBtn
          onClick={() => {
            onRemove(memo.id);
          }}
        >
          삭제
        </DeleteBtn>
      </BtnBox>
    </Container>
  );
}

export default MemoListItem;
