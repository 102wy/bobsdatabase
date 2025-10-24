import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import * as utils from '../../utils';

const Page16 = () => {
  const { pathname } = useLocation();
  const { keyword } = useParams();
  const title = utils.keywordDecode(pathname);

  return (
    <Wrap>
      <h2>{title}</h2>
      {/* 레벨 0은 모두가 보임 */}
      <p className="title">Level 0.</p>
      <p>8세 여자아이, 민광선의 무남독녀 외동딸.</p>
      {/* 레벨 1은 1~3이 다 볼수있음 */}
      {keyword >= utils.Level[1] && (
        <>
          <p className="title">Level 1.</p>
          <p>민광선이 죽은 후 판권의 절반을 상속받았다. </p>
        </>
      )}

      {/* 레벨 3은 3만 볼수있음  */}
      {keyword >= utils.Level[3] && (
        <>
          <p className="title">Level 3.</p>
          <p>한달 전 실종. 민서우의 판권은 성해숙에게 넘어갔고, 다시 바코드레코드 법인에 귀속된 걸 확인 할 수 있었다.</p>
        </>
      )}
    </Wrap>
  );
};

export default Page16;

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
