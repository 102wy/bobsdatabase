import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import * as utils from '../../utils';

const Page11 = () => {
  const { pathname } = useLocation();
  const { keyword } = useParams();
  const title = utils.keywordDecode(pathname);

  return (
    <Wrap>
      <h2>{title}</h2>

      {/* 레벨 3은 3만 볼수있음  */}
      {keyword >= utils.Level[3] && (
        <>
          <p className="title">Level 3.</p>
          <p>
            밥스흥신소를 위장 회사로 둔 사설수사기관이다.
            <br />
            흥신소에서 유능한 인재들을 골라 훈련시켜 뽑은 탐정들의 단체로 각종 미제 사건이나 기획 수사를 위주로 한다.
            <br />
            다음 수사는 애기동산의 진상!
          </p>
        </>
      )}
    </Wrap>
  );
};

export default Page11;

const Wrap = styled.div`
  padding: 20px 0;
  h2 {
    text-align: center;
    font-size: 24px;
  }
  p.title {
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 5px;
  }
`;
