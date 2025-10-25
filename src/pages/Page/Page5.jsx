import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import * as utils from "../../utils";

const Page5 = () => {
  const { pathname } = useLocation();
  const { keyword } = useParams();
  const title = utils.keywordDecode(pathname);

  return (
    <Wrap>
      <h2>{title}</h2>
      {/* 레벨 0은 모두가 보임 */}
      <p className="title">Level 0.</p>
      <img
        src={`${process.env.PUBLIC_URL}/images/5page_lv0.png`}
        alt="바코드레코드"
      />
      <p>국내 굴지의 음반회사.</p>
      {/* 레벨 1은 1~3이 다 볼수있음 */}
      {keyword >= utils.Level[1] && (
        <>
          <p className="title">Level 1.</p>
          <p>
            2004년 법인 '바코드레코드'를 세웠는데 초기에는 리어카로 카세트를
            팔다가 2.5톤 트럭으로 강원도 등지에서 순회영업을 한 뒤 2006년 대구
            동성로에 첫 매장을 열고 2014년 신사옥을 세우고 법인명을
            '바코드유통'으로 변경했다.
            <br />
            현재는 아이돌 음반을 주로 판매하고 있다. 민광선의 모든 활동을 주관한
            회사이다.
          </p>
        </>
      )}
      <br />
      <br />
      <br />
      {/* 레벨 2는 2와3이 볼수있음 */}
      {keyword >= utils.Level[2] && (
        <>
          <p className="title">Level 2.</p>
          <p>
            갑자스런 대형미디어의 탄생에 자본의 의문을 가진 사람들이 많았으나
            막대한 자금력으로 회사는 갈수록 더 커져만 갔다. <br />
            스트리밍 관련 사업의 빠른 선점을 통해 지금도 막대한 수익이 창출되고
            있다. 현재 민광선의 모든 판권이 바코드레코드에 속해 있다.
          </p>
        </>
      )}
      <br />
      <br />
      <br />
      {/* 레벨 3은 3만 볼수있음  */}
      {keyword >= utils.Level[3] && (
        <>
          <p className="title">Level 3.</p>
          <p>
            애기동산 소유의 회사이다.
            <br />
            회장 김기숙이 애기동산 간부 최진성을 대표이사 자리에 앉힌 종교소유의
            회사이다.
            <br />
            애기동산의 지속적인 수익사업이 필요하다는 생각에 시작한 사업으로
            연예인 포교활동도 같이 이루어지기 위해 설립된 사업체이다.
          </p>
        </>
      )}
    </Wrap>
  );
};

export default Page5;

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
