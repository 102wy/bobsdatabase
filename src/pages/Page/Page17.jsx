import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import * as utils from '../../utils';

const Page17 = () => {
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
        <span className="keyword">
          <span className="keyword">민광선</span>
        </span>
        의 오래된 친구.
      </p>
      <br />
      <br />
      <br />
      {/* 레벨 1은 1~3이 다 볼수있음 */}
      {levelIndex >= 1 && (
        <>
          <p className="title">Level 1.</p>
          <p>
            어렸을 적 부터 <span className="keyword">민광선</span>과 한동네에 살며 오랜 우정을 쌓았다. <span className="keyword">민광선</span>이 생전에 유일하게 믿고 이야기하던 친구이다.
            <br />
            가지고 있는 돈이 없어서 결혼식을 고민하던 중에 <span className="keyword">민광선</span>이 부인 몰래 5,000만원을 빌려주었다.
            <br />
            그리고 <span className="keyword">민광선</span>이 사망한 후 경찰조사를 받았으나, 별다른 진술을 하지 않았다. 본인도 그 당시 너무 충격을 받았고, 어린 <span className="keyword">민서우</span>양을 생각하여 다 이야기하지 않았을 가능성이 있다.
            <br />
            <span className="keyword">민광선</span>에 대해 가장 잘 알았고, <span className="keyword">민광선</span>의 주변 인물에 대해서도 제일 잘 았을 것이다.
          </p>
        </>
      )}
    </Wrap>
  );
};

export default Page17;

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
