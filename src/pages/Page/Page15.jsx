import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import * as utils from '../../utils';

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
        35세 여성, <span className="keyword">민광선</span>의 부인. 가족으로는 딸 <span className="keyword">민서우</span>와 오빠 <span className="keyword">성해준</span>이 있다.
      </p>
      <br />
      <br />
      <br />
      {/* 레벨 1은 1~3이 다 볼수있음 */}
      {levelIndex >= 1 && (
        <>
          <p className="title">Level 1.</p>
          <img src={`${process.env.PUBLIC_URL}/images/15page_lv1.png`} alt="성해숙" />
          <p>
            2013년 <span className="keyword">민광선</span>의 팬으로써 콘서트에 참석했다가 첫만남을 가졌다. 그 이후에 별다른 일은 없었지만, 우연히 화학과 동문과의 만남의 자리에 <span className="keyword">민광선</span>이 나오게 되면서 둘의 인연은 이어져갔다. 같은 종류의 <span className="keyword">담배</span>를 피우는 게 꼭 인연처럼 다가온 듯 했다. 그리고 1년 뒤 결혼을 하였고, 둘사이에는 딸 <span className="keyword">민서우</span>가 있다. <span className="keyword">민광선</span>이 죽은 후 판권의 절반을 상속받았다.
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
            절실한 기독교신자로써 결혼 후에 입교하였다. 신앙의 힘으로 <span className="keyword">민광선</span>을 내조하고, 딸 <span className="keyword">민서우</span>를 키웠다. <span className="keyword">민광선</span>이 죽고 난 뒤에는 <span className="keyword">민광선</span>이 남긴 재산으로 <span className="keyword">민광선</span> 관련 사업들을 만드는 '광선엔터테인먼트' 회사를 설립해서 운영중이다.
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
            <span className="keyword">애기동산</span>의 광신도로써 집안의 모든 재산을 교단에 헌납하였다. 상속받은 판권과 딸의 판권까지 전부 <span className="keyword">바코드레코드</span> 법인에 헌납하였다. 현재는 <span className="keyword">애기동산</span>의 간부급 신도로써 다른 수익사업인 <span className="keyword">민광선</span> 사업을 맡고 있다. 하지만 이 역시도 <span className="keyword">애기동산</span>의 소유 회사로 되어있다.
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
