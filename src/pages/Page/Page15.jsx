import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import * as utils from "../../utils";

const Page15 = () => {
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
        33세 여성, 민광선의 부인. 가족으로는 딸 민서우와 오빠 성해준이 있다.
      </p>
      <br />
      <br />
      <br />
      {/* 레벨 1은 1~3이 다 볼수있음 */}
      {levelIndex >= 1 && (
        <>
          <p className="title">Level 1.</p>
          <img
            src={`${process.env.PUBLIC_URL}/images/15page_lv1.png`}
            alt="성해숙"
          />
          <p>
            2013년 민광선의 팬으로써 콘서트에 참석했다가 첫만남을 가졌다.
            <br />
            그 이후에 별다른 일은 없었지만, 우연히 화학과 동문과의 만남의 자리에
            민광선이 나오게 되면서 둘의 인연은 이어져갔다.
            <br />
            같은 종류의 담배를 피우는 게 꼭 인연처럼 다가온 듯 했다.
            <br />
            그리고 1년 뒤 결혼을 하였고, 둘사이에는 딸 민서우가 있다. 민광선이
            죽은 후 판권의 절반을 상속받았다.
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
            절실한 기독교신자로써 결혼 후에 입교하였다.
            <br />
            신앙의 힘으로 민광선을 내조하고, 딸 민서우를 키웠다.
            <br />
            민광선이 죽고 난 뒤에는 민광선이 남긴 재산으로 민광선 관련 사업들을
            만드는 '광선엔터테인먼트' 회사를 설립해서 운영중이다.
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
            애기동산의 광신도로써 집안의 모든 재산을 교단에 헌납하였다.
            <br />
            상속받은 판권과 딸의 판권까지 전부 바코드레코드 법인에 헌납하였다.
            <br />
            현재는 애기동산의 간부급 신도로써 다른 수익사업인 민광선 사업을 맡고
            있다.
            <br />
            하지만 이 역시도 애기동산의 소유 회사로 되어있다.
          </p>
        </>
      )}
    </Wrap>
  );
};

export default Page15;

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
