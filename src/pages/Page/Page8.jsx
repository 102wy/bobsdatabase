import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import * as utils from '../../utils';

const Page8 = () => {
  const { pathname } = useLocation();
  const { keyword } = useParams();
  const title = utils.keywordDecode(pathname);

  return (
    <Wrap>
      <h2>{title}</h2>
      {/* 레벨 0은 모두가 보임 */}
      <p className="title">Level 0.</p>
      <p>암호 체계 중의 하나이다. 키워드 글자를 우선배치하여 재조합하는 방식이다.</p>
      {/* 레벨 1은 1~3이 다 볼수있음 */}
      {keyword >= utils.Level[1] && (
        <>
          <img src="/images/8page_lv1.png" alt="키워드암호" />
          <p className="title">Level 1.</p>
          <p>
            keyword를 키워드로 잡고 제시한 암호문의 예
            <br />
            Keyword를 우선배치한 해석표에서 암호문을 대입하여 상단의 해독문자를 대입하는 방식.
          </p>
        </>
      )}
      {/* 레벨 2는 2와3이 볼수있음 */}
      {keyword >= utils.Level[2] && (
        <>
          <p className="title">Level 2.</p>
          <img src="/images/8page_lv2.png" alt="키워드암호" />
          <p>한글식으로 변환도 가능하다. 키워드가 무엇인가에 따라 해독 방법이 달라진다.</p>
        </>
      )}
    </Wrap>
  );
};

export default Page8;

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
