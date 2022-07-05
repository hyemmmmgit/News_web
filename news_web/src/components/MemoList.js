import React, { useState } from 'react';
import MemoListItem from './MemoListItem';
import styled from 'styled-components';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';

// const SliderWindow = styled.div`
//   border: 1px solid red;
//   overflow: hidden;
// `;

const MemoListBox = styled.div`
  display: flex;
  justify-content: center;
  width: 466px;
  max-height: 300px;
  flex-wrap: wrap;
  overflow: hidden;
  /* border: 1px solid black; */
`;

const UpdownBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 153px;
  right: 28px;
  .btn {
    font-size: 28px;
    cursor: pointer;
  }
`;

function MemoList({ memos, onRemove, onUpdate }) {
  const [slider, setSlider] = useState(0);

  function ToDown() {
    setSlider(slider + 1);
  }

  return (
    <>
      <MemoListBox slider={slider}>
        {memos.map((memo) => (
          <MemoListItem
            key={memo.id}
            memo={memo}
            onRemove={onRemove}
            onUpdate={onUpdate}
          >
            {' '}
          </MemoListItem>
        ))}
      </MemoListBox>
      {/* <UpdownBox>
        <AiFillCaretUp className="btn" />
        <AiFillCaretDown className="btn" onClick={() => ToDown()} />
      </UpdownBox> */}
    </>
  );
}

export default MemoList;
