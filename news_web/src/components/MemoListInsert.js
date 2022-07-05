import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

const Container = styled.div``;

const Textarea = styled.textarea`
  width: 30vw;
  height: 240px;
  padding: 14px;
  background-color: #b8dae3;
  border: none;
  font-size: 14px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

const SaveBtn = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #48a0b6;
  color: #046683;
  cursor: pointer;
  position: relative;
  left: 390px;
  bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  .plusIcon {
    font-size: 28px;
  }
`;

function MemoListInsert({ onInsert, filtered }) {
  const [value, setValue] = useState('');

  function onChange(e) {
    setValue(e.target.value);
  }

  function onSubmit(e) {
    onInsert(value);
    setValue('');
    e.preventDefault();
  }

  useEffect(() => {
    setValue(filtered.text);
  }, [filtered]);
  return (
    <Container>
      <Textarea
        onChange={onChange}
        value={value}
        placeholder="뉴스를 읽고 기록하고 싶은 내용을 메모하세요."
      />
      <SaveBtn onClick={onSubmit}>
        <AiOutlinePlus className="plusIcon" />
      </SaveBtn>
    </Container>
  );
}

export default MemoListInsert;
