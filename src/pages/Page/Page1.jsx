import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import * as utils from '../../utils';

const Page1 = () => {
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
        <iframe width="auto" height="315" src="https://youtu.be/FZAaLyY-PlI?si=0C37Ag8VM2ElDjjj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </p>
      <br />
      <br />
      <br />
      {/* 레벨 3은 3만 볼수있음  */}
      {levelIndex >= 3 && (
        <>
          <p className="title">Level 3.</p>
          <p>
            성해숙은 민광선과 만나서 결혼을 하였고, 딸 민서우를 낳아 살고 있었다.
            <br />
            그러던 중 오빠 성해준이 교도소를 나와서 갈 곳이 없어 민광선과 성해숙이 사는 집에 얹혀 살게 된다.
            <br />
            성해준은 교도소에 있을 때 만난 전도사의 회유에 넘어가 사이비 종교인 애기동산에 가입하게 된다.
            <br />
            애기동산은 교주 김기숙이 애기야로 불리는 메시아이고, 신이라는 교리를 주장하며 신도를 모아왔다.
            <br />
            그 과정에 신도들의 재산을 가스라이팅으로 뺏고, 돈이 없는 신도들은 노동력으로 갚게 하였다.
            <br />
            성해준의 폭력성을 일찍이 알게 된 김기숙은 성해준을 이용해 교단내 폭력활동들을 지시하였다.
            <br />
            그리고 성해준은 곧 애기동산의 간부인 새나라 주민이 되었고, 동생 성해숙도 입교를 시킨다.
            <br />
            그렇게 종교에 빠진 성해숙은 민광선의 재산을 상당히 헌납하게 되었고, 성해숙 역시 새나라 주민이 된다.
            <br />
            그리고 성해숙은 전공을 살려 교단 내 약물을 담당하게 되었다.
            <br />
            민광선은 성해숙이 재산을 교단에 헌납하게 된 것을 알고 이혼을 준비한다.
            <br />
            하지만 이 사실을 알아챈 애기동산에서 민광선의 소속회사인 바코드레코드 사장 최진성에게 민광선을 죽여 판권을 뺏으라 지시한다.
            <br />
            최진성역시 같은 애기동산신도로 성해숙과 성해준을 불러 같이 민광선 살인 모의를 하게 된다.
            <br />
            회사 문제로 최진성이 집으로 찾아가게 되면 성해숙이 술상을 준비해주기로 하고, 그 술에 애기동산의 신규 마비제인 PARA-Z를 섞기로 했다.
            <br />
            그리고 그 맥주를 민광선 혼자만 마시게 되었고, 가사상태에 빠진 민광선을 성해준이 교살처럼 보이기 위해서 V형흔이 남도록 삭흔을 남긴다.
            <br />
            그리고 그렇게 죽은 민광선을 자살처럼 보이게 하기 위해서 계단에 목을 맨 상태로 두고 119에 신고한다.
            <br />
            그렇게 민광선이 죽고 성해숙은 자신이 상속 받은 판권 절반을 바코드레코드에 헌납하고, 딸 민서우가 상속받은 판권 절반 역시 보호자의 지위를 이용하여 헌납한다.
            <br />
            <br />
            단서
            <br />
            <br />
            1. 현장보고서에 보면 맥주잔이 2개인데 비워진 맥주잔은 하나이다. 그리고 2종류의 담배가 있다. (경찰보고서)
            <br />
            2. 성해숙은 민광선과 같은 말보로라이트를 피고, 최진성은 버지니아 골드를 핀다. (민광선, 성해숙, 최진성, 담배 DB)
            <br />
            3. 성해숙은 화학과 출신의 약물담당자였다. PARA-Z를 다룰 수 있는 인물이다. (성해숙 DB)
            <br />
            4. 성해준은 교단 활동을 하며 타살을 자살로 보이게 하는 방법을 익혔다. (성해준 DB)
            <br />
            5. 최진성은 애기동산에서 민광선을 죽이고 판권을 뺏으라는 지령을 받았다. (지반철 명함)
            <br />
            6. 3바퀴 정도 감긴 전기줄의 형태면 V형흔이 아닌 일주흔이 남아야한다. (삭흔 DB 기반 추리)
          </p>
        </>
      )}
    </Wrap>
  );
};

export default Page1;

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
