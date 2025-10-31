import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import * as utils from '../../utils';

const Page7 = () => {
  const { pathname } = useLocation();
  const { keyword } = useParams();
  const title = utils.keywordDecode(pathname);
  const levelIndex = utils.keywordToIndex(utils.keywordDecode(keyword));

  return (
    <Wrap>
      <h2>{title}</h2>
      {/* 레벨 0은 모두가 보임 */}
      <p className="title">Level 0.</p>
      <p>검시보고서에 적는 사망 사유 중의 하나이다.</p>
      <br />
      <br />
      <br />
      {/* 레벨 1은 1~3이 다 볼수있음 */}
      {levelIndex >= 1 && (
        <>
          <p className="title">Level 1.</p>
          <p>신체의 일부가 지상 또는 주위의 물체에 지지되어 체중의 일부만이 목을 조여 질식사한 것을 의미한다.</p>
        </>
      )}
      <br />
      <br />
      <br />
      {/* 레벨 2는 2와3이 볼수있음 */}
      {levelIndex >= 2 && (
        <>
          <p className="title">Level 2.</p>
          <p>
            대부분은 V자형태의 삭흔이 남았고, 저항흔이 없다면 교살이 아닌 불안전의사라 표현한다.
            <br />
            대부분의 불안전의사는 자살이라 판명된다.
          </p>
        </>
      )}
    </Wrap>
  );
};

export default Page7;

const Wrap = styled.div`
  padding: 20px;
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
