import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import * as utils from "../../utils";
import * as hooks from "../../hooks";

const Page3 = () => {
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
        흥신소.
        <br />
        사람찾기, 미행, 불륜조사, 떼인돈 받아주기 등 부탁하는 일은 다 들어주는
        심부름센터.
      </p>
      <br />
      <br />
      <br />
      {/* 레벨 1은 1~3이 다 볼수있음 */}
      {levelIndex >= 1 && (
        <>
          <p className="title">Level 1.</p>
          <p>
            사장 : 엉클밥
            <br />
            사훈 : "은밀하게 쫒고, 끝까지 추격한다!"
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
            초이스 미제사건해결소의 위장 회사.
            <br />
            흥신소에서 유능한 인재들을 골라 훈련시켜 뽑은 탐정들의 단체.
            <br />
            각종 미제 사건이나 기획 수사를 전담하는 사설수사기관.
          </p>
        </>
      )}
    </Wrap>
  );
};

export default Page3;

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
