import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import * as utils from '../../utils';

const Page9 = () => {
  const { pathname } = useLocation();
  const { keyword } = useParams();
  const title = utils.keywordDecode(pathname);

  return (
    <Wrap>
      <h2>{title}</h2>
      {/* 레벨 0은 모두가 보임 */}
      <p className="title">Level 0.</p>
      <p>
        애기동산에서 개발한 신종 마비제.
        <br />
        부검을 하여도 약물반응이 나오지 않는다.
      </p>
      {/* 레벨 1은 1~3이 다 볼수있음 */}
      {keyword >= utils.Level[1] && (
        <>
          <p className="title">Level 1.</p>
          <p>
            섭취시 나타나는 증상
            <br />
            20ml를 섭취 시 30분안에 해독을 못하면 사망.
            <br />
            10ml를 섭취 시 30분안에 해독을 못하면 3시간 가사상태.
            <br />
            <br />
            주사투여시 나타나는 증상
            <br />
            10ml를 맞고 10분안에 해독을 못하면 사망.
            <br />
            5ml를 맞고 10분안에 해독을 못하면 30분간 가사상태.
          </p>
        </>
      )}
      {/* 레벨 2는 2와3이 볼수있음 */}
      {keyword >= utils.Level[2] && (
        <>
          <p className="title">Level 2.</p>
          <p>
            이 마비제는 뛰어난 효능에 비해 취급이 매우 어렵다.
            <br />
            주사로 투여하는 경우에는 주사기에 담는 과정을 전문가가 해준다면 투여는 일반인도 가능하지만, 음식물에 섞어 넣는 것은 전문가만이 할 수 있다.
            <br />
            음식과 궁합이 상당히 좋지 않아 대부분의 음식에선 효능의 약화를 보였다.
            <br />
            하지만 전문가들은 액체에 섞을 때 자신들만의 독특한 스터링을 한다면 약효의 성능 저하없이 제조가 가능하다.
          </p>
        </>
      )}
      {/* 레벨 3은 3만 볼수있음  */}
      {keyword >= utils.Level[3] && (
        <>
          <p className="title">Level 3.</p>
          <p>
            해독방법은 수크로스를 185도 이상으로 가열하여 액상의 상태를 만들고 탄산수소 나트륨 50:1 정도로 첨가하여 다회 스터링해서 일정하게 섞는다.
            <br />
            수크로스 탄산수소 나트륨 화합물을 다시 냉각하여 고체화한다.
            <br />
            그것을 적정 용량을 복용하면 해독이 된다
          </p>
        </>
      )}
    </Wrap>
  );
};

export default Page9;

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
