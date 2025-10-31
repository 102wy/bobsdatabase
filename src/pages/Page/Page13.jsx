import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import * as utils from '../../utils';

const Page13 = () => {
  const { pathname } = useLocation();
  const { keyword } = useParams();
  const title = utils.keywordDecode(pathname);
  const levelIndex = utils.keywordToIndex(utils.keywordDecode(keyword));

  return (
    <Wrap>
      <h2>{title}</h2>
      {/* 레벨 0은 모두가 보임 */}
      <p className="title">Level 0.</p>
      <p>
        39세 남성, <span className="keyword">성해숙</span>의 오빠.
      </p>
      <br />
      <br />
      <br />
      {/* 레벨 1은 1~3이 다 볼수있음 */}
      {levelIndex >= 1 && (
        <>
          <p className="title">Level 1.</p>
          <img src={`${process.env.PUBLIC_URL}/images/13page_lv1.png`} alt="성해준" />
          <p>
            체구가 좋고 호전적인 성격의 소유자이다.
            <br />
            <span className="keyword">민광선</span>이 사망한 당시 <span className="keyword">민광선</span>의 집 지하에 거주중이었다.
            <br />
            심각한 헬스광이라 정해진 식단에 따라 식사를 하고, 간식, 술, 담배, 탄수화물등을 일절 입에 대지 않는다.
          </p>
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
            큰 체구의 소유자로 어린 시절부터 무서운게 없었던 <span className="keyword">성해준</span>은 심각한 폭력성을 보였고 구치소와 교도소를 수차례 들락날락 거렸다.
            <br />
            현재는 폭력전과만 13범으로 취업이 불가능한 상태이다.
            <br />
            하지만 항상 어딘가로 바쁘게 다니고 갔다온 후에 운동으로 무언가를 해소하는 모양새였다.
            <br />
            그리고 몇 건의 폭행사건을 <span className="keyword">민광선</span>이 돈으로 막아주었다.
          </p>
        </>
      )}
      <br />
      <br />
      <br />
      {/* 레벨 3은 3만 볼수있음  */}
      {levelIndex >= 3 && (
        <>
          <p className="title">Level 3.</p>
          <p>
            어렸을때 많은 사고를 치다가 교도소에 교화하러 온 전도사에 이끌여 <span className="keyword">애기동산</span>에 가입하게 된다.
            <br />
            그리고 <span className="keyword">성해준</span>의 폭력성을 알아본 <span className="keyword">김기숙</span>은 신도들의 폭행, 살해등을 지시했고, 그렇게 <span className="keyword">애기동산</span>의 간부까지 오르게 된다.
            <br />
            이 과정에서 자연스럽게 자살로 보이는 교살방법들을 알게 된다.
            <br />
            그리고 동생 <span className="keyword">성해숙</span>을 가입시키고 <span className="keyword">민광선</span>의 재산을 빼돌려 헌납하게 된다.
          </p>
        </>
      )}
    </Wrap>
  );
};

export default Page13;

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
