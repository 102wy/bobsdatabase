import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import * as utils from "../../utils";

const Page12 = () => {
  const { pathname } = useLocation();
  const { keyword } = useParams();
  const title = utils.keywordDecode(pathname);
  const levelIndex = utils.keywordToIndex(utils.keywordDecode(keyword));

  return (
    <Wrap>
      <h2>{title}</h2>
      {/* 레벨 0은 모두가 보임 */}
      <p className="title">Level 0.</p>
      <p>60세 여성이며 애기동산의 교주이다.</p>
      <br />
      <br />
      <br />
      {/* 레벨 1은 1~3이 다 볼수있음 */}
      {levelIndex >= 1 && (
        <>
          <p className="title">Level 1.</p>
          <img
            src={`${process.env.PUBLIC_URL}/images/12page_lv1.png`}
            alt="성해숙"
          />
          <p>
            교주가 되기 전엔 평범한 주부였으며, '주현교회'라는 사이비 종교에서
            신앙 생활을 하였다
            <br />
            주현교회 이고부목사는 신도들에게 머리를 밀게 하는 경우가 있었기에
            '삭발교'라는 이름으로도 불렸다.
            <br />
            교인들을 폭행하는 것은 물론, 명색이 교회라는 건물 안에서 예배 중에
            신도들과 함께 천국으로 가자면서 옷을 벗고 껴안고 춤추는 나체 댄스
            사건을 일으켜 거기에 충고하러 온 동료 목사를 폭행을 하여 구속되었다.
            <br />
            <span className="keyword">김기숙</span>은 그 신도를 이어 받아{" "}
            <span className="keyword">애기동산</span>을 설립한다.
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
            주현교회에 배운 신도 관리법과 가스라이팅을 본인만의 스타일로 발전
            시켜 더 악독하고, 철저히 본인만을 위한 종교를 만들었다.
            <br />
            자신의 뜻이 교리라는 애기야법을 만들어 신도들을 폭행, 감금,
            살해하였으며, 애기동산에 반하는 외부인사들에겐 폭행, 협박, 감금,
            살해를 꺼리낌 없이 지시했다.
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
          <p>천벌을 받아 마땅한 여자이고, 언젠가 그 천벌을 내리러 가주마.</p>
        </>
      )}
    </Wrap>
  );
};

export default Page12;

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
