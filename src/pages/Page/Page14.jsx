import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import * as utils from "../../utils";

const Page14 = () => {
  const { pathname } = useLocation();
  const { keyword } = useParams();
  const title = utils.keywordDecode(pathname);

  return (
    <Wrap>
      <h2>{title}</h2>
      {/* 레벨 0은 모두가 보임 */}
      <p className="title">Level 0.</p>
      <p>56세의 남성. 바코드레코드의 대표이사.</p>
      {/* 레벨 1은 1~3이 다 볼수있음 */}
      {keyword >= utils.Level[1] && (
        <>
          <p className="title">Level 1.</p>
          <img
            src={`${process.env.PUBLIC_URL}/images/14page_lv1.png`}
            alt="최진성"
          />
          <p>
            작고 앙상한 체구, 큰머리, 표독스러운 인상의 소유자로 돈되는거라면
            뭐든 달려든다.
            <br />
            사업수완 역시 상당히 좋아서 2004년에 개업한 바코드레코드를 현재는
            사옥까지 갖춘 명실상부 대한민국 최고의 음반회사로 키워냈다.
            <br />그 과정이 불명확해 자금의 출처에 대한 의혹이 항상 있다.
          </p>
        </>
      )}
      {/* 레벨 2는 2와3이 볼수있음 */}
      {keyword >= utils.Level[2] && (
        <>
          <p className="title">Level 2.</p>

          <p>
            현재는 스트리밍 사업부분에서 국내 1위의 자리에 있다.
            <br />
            최진성의 감각으로 일찍부터 스트리밍 사업에 진출했던 것이 큰 도움이
            되었다.
            <br />
            현재는 오프라인 매장을 거의 철수하고 온라인판매와 스트리밍 사업,
            그리고 각종 아이돌 사인회를 개최하면 업계 1위 자리를 여전히 고수하고
            있다.
          </p>
        </>
      )}
      {/* 레벨 3은 3만 볼수있음  */}
      {keyword >= utils.Level[3] && (
        <>
          <p className="title">Level 3.</p>
          <p>
            애기동산의 간부급 신도로써 주위사람들은 그를 '대갈장군'이라 불렀다.
            <br />
            항상 버지니아 골드를 항상 피우며 주머니에 손을 꼽고 사람들에게
            지시하는 모양새가 장군과 같다하여 붙여진 별명이다.
            <br />
            그리고 돈에 집착하는 모습때문에 김기숙은 그를 바코드레코드
            대표이사자리에 선임했다.
          </p>
        </>
      )}
    </Wrap>
  );
};

export default Page14;

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
