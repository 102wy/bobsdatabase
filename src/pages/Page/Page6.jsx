import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import * as utils from "../../utils";

const Page6 = () => {
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
        끈이 목 부위를 압박하여 피부에 형성된 압박흔 또는 압박성 피부 까짐.
        목맴에서 가장 중요한 소견이다.
      </p>
      <br />
      <br />
      <br />
      {/* 레벨 1은 1~3이 다 볼수있음 */}
      {levelIndex >= 1 && (
        <>
          <p className="title">Level 1.</p>
          <img
            src={`${process.env.PUBLIC_URL}/images/6page_lv1.png`}
            alt="삭흔"
          />
          <p>
            몸에 남는 삭흔의 모양, 방향, 자국의 진하기에 따라 자살이냐
            타살이냐를 가른다.
            <br />
            스스로 목을 맸을 땐 본인의 체중이 실려서 목앞쪽에 선명한 자국 한줄이
            남는다.
            <br />
            이 자국은 귀 밑을 지나가면서 지나가고 앞에서 보았을 땐 V자형태로
            보인다.
            <br />
            타살의 경우 양손을 교차해서 잡기 때문에 일주흔이라 불리는 형태의
            삭흔이 남는다.
            <br />
            일주흔 하나의 원모양의 형태로 이어진 삭흔으로 타살 흔적이 될 수
            있다.
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
            V자 형태의 삭흔이라고 모두 자살은 아니다.
            <br />
            교살 할 당시 교차해 잡을때 목과 손사이에 간격이 생기면 일주흔은
            생기지 않는다.
            <br />
            이럴 경우 힘이 좋은 건장한 남자라는 가정은 붙는다.
          </p>
        </>
      )}
    </Wrap>
  );
};

export default Page6;

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
