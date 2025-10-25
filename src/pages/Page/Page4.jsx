import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import * as utils from "../../utils";

const Page4 = () => {
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
        진정성 있고 마음을 울리는 목소리로 많은 명곡을 남긴 싱어송라이터로
        유명한 가수.
        <br />
        2020년 1월 6일 사망했으며 사망당시 33세.
        <br />
        생전 가족은 부인 성해숙과 딸 민서우가 있다.
      </p>
      <br />
      <br />
      <br />
      {/* 레벨 1은 1~3이 다 볼수있음 */}
      {levelIndex >= 1 && (
        <>
          <p className="title">Level 1.</p>
          <p>
            2013년에 첫 개인콘서트를 시작으로 엄청나게 많은 히트곡을 발매하였다.
            <br />
            소시민의 삶을 애환있게 그려낸 가사에 많은 공감을 얻어 큰 인기를
            얻었다.
            <br />
            경찰의 공식보고서에는 사망당시 우울증으로 인하여 집에서 목을 매어
            자살하였다고 적혀있다.
            <br />
            와이프 성해숙과는 우연히 같은 담배를 핀다는 공통점으로 만나 1년
            연애하였고 2014년에 결혼했다.
            <br />
            결혼 후 더욱 왕성한 활동을 통해 많은 콘서트를 진행하였고, 연령대를
            가리지 않는 많은 팬덤을 확보하였다.
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
            시상이나 생각을 항상 기록하는 습관으로 유명한 메모광이다.
            <br />
            하이트맥주와 말보로 라이트를 좋아했고, 가끔씩 떠나는 여행에서 쉬고
            올 줄 아는 낭만파였다.
            <br />
            기타 하나와 하모니카 하나로 가는 곳마다 심금을 울린 천재예술가였다.
            <br />
            그의 노래를 들은 혹자는 민광선을 가리켜서 가객, 노래하는 시인,
            노래하는 철학자라고 부른다.
            <br />또 다른 누군가는 민광선이, 광선이 형, 오빠, 아저씨라는
            이미지로 대중들에게 남아있는 가수라고도 말한다.
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
            민광선은 성해숙이 신흥종교에 빠지게 된 걸 알았고, 모았던 재산들이
            성해숙과 성해준에 의해서 그 종교에 헌납됨을 알게 되어 이혼을
            준비하던 중에 사망하였다.
          </p>
        </>
      )}
    </Wrap>
  );
};

export default Page4;

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
