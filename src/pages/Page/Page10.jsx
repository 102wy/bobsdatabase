import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import * as utils from "../../utils";

const Page10 = () => {
  const { pathname } = useLocation();
  const { keyword } = useParams();
  const title = utils.keywordDecode(pathname);
  const levelIndex = utils.keywordToIndex(utils.keywordDecode(keyword));

  return (
    <Wrap>
      <h2>{title}</h2>
      {/* 레벨 0은 모두가 보임 */}
      <p className="title">Level 0.</p>
      <img
        src={`${process.env.PUBLIC_URL}/images/10page_lv0.png`}
        alt="애기동산"
      />
      <p>
        2002년에 <span className="keyword">김기숙</span>이 창시한 대한민국의
        협업마을형 신흥종교.
      </p>
      <br />
      <br />
      <br />
      {/* 레벨 1은 1~3이 다 볼수있음 */}
      {levelIndex >= 1 && (
        <>
          <p className="title">Level 1.</p>
          <p>
            교주 <span className="keyword">김기숙</span>은 '애기농장'이라는 것을
            세웠고, '갈 곳 없는 신도들을 모아 공동체를 만들고 떡 장사, 어묵
            장사, 음반 장사 등으로 땅을 샀다.'고 주장한다.
            <br />
            얼핏 보면 일반적인 개신교 종파 중 하나 같겠지만, 실상은 개신교에서
            예수만 빼고 그 자리에 <span className="keyword">김기숙</span>을
            대입한 전형적인 사이비 종교에 불과하다.
            <br />이 종교의 교리는 일단 <span className="keyword">김기숙</span>
            은 신이며 3살짜리 애기이기 때문에 '애기야'라고 불러야 하며 어떤 말을
            해도, 어떤 짓을 해도 죄가 되지 않는다는 것이었다.
            <br />
            이러한 교리를 '애기야 법'이라고 부르며 새나라에서는 이 법을 따라야
            한다는 매우 해괴한 주장을 했다.
            <br />
            자신은 메시아이기 때문에 하늘의 언어 애기어를 통해 이야기하고
            새나라의 주민이 될 자들에게 애기어로 메시지 전달한다고 한다.
            <br />
            애기어는 너무 말이 안되는 글자의 나열이었기에 매우 간단한
            <span className="keyword"> 키워드암호</span>의 일종일거라 전문가들은
            이야기했다.
            <br />
            그리고{" "}
            <span className="bold">
              고액헌금자나 기여를 많이 한 신도들은 이 교단의 간부가 되고, 새나라
              주민이라 불렀다.
            </span>
            새나라 주민들은 신도번호를 부여받는데, 그 신도번호는 전화번화 앞
            4자리와 뒷 4자리를 더한 숫자일 뿐이었다.
            <br />
            모든 신도들은 사후 낙원인 새나라에 들어 갈 수 있는 새나라 주민이
            되기 위하여 지금도 헌금을 납부하고 노동력을 착취를 당하고 있다.
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
            2004년에는 첫 수익사업체 '
            <span className="keyword">바코드레코드</span>'를 세워 초기에는
            트럭으로 다른 음반점에 카세트 등 음반을 팔다가 2006년 대구 동성로에
            자체 매장을 처음 연 후 특유의 가격파괴 전략을 세워 광속으로
            음반도매업계를 장악하며 안정적인 사업체까지 가지게 되었다.
            <br />그 과정에서 <span className="keyword">김기숙</span>은 회장으로
            취임하고 대외적인 활동은 애기동산 간부인{" "}
            <span className="keyword">최진성</span>이 대표이사로 활동한다.
            <br />
            그리고 <span className="keyword">최진성</span>에게 지시할때는
            애기어로 지시하였다.
            <br />
            애기어는 말이 안되는 언어인거 같지만 암호해독팀에서 해독을 해본 결과
            기존에 사용하는 키워드암호를 한글식으로 변환하여 사용한 것으로
            보인다.
            <br />
            하지만 그 키워드는 전달 할 때마다 달라지고 대부분의 암호문에는
            천사의 이름을 키워드로 쓰는 게 밝혀졌다.
            <br />
            쉬운 암호해독법때문에 경찰에서도 애기어 해독이 가능해졌고,
            2022년부터 일반 신도들도 애기어의 해석이 가능해졌다.
            <br />
            이렇게 벌어들인 돈으로 신종 마비제를 개발하여 신도들을 제어하거나
            반대인사들 제거에 사용한다.
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
            <span className="keyword">김기숙</span>은 고도의 가스라이팅을 통하여
            신도들의 전재산을 헌납받았고, 재산이 없는 자들은 노동력을 갈취했다.
            <br />
            그 금액은 추정치로만 수조에 이르는 것으로 예상되고, 그렇게 모은
            재산으로 본인은 온갖 향응과 사치를 행하며 자신만의 왕국에서
            살고있다.
            <br />
            그리고 자신이 주장하는 교리에 어긋날 시에는 살인이나 살인교사도
            망설이지 않고 행하였다.
            <br />
            어린아이, 여성, 노인을 가리지 않고… 언젠가는 실상조사에 나서야 하는
            범죄단체이다.
          </p>
        </>
      )}
    </Wrap>
  );
};

export default Page10;

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
