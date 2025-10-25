import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import * as utils from "../../utils";

const Page2 = () => {
  const { pathname } = useLocation();
  const { keyword } = useParams();
  const title = utils.keywordDecode(pathname);

  return (
    <Wrap>
      <h2>{title}</h2>
      {/* 레벨 0은 모두가 보임 */}
      <p className="title">Level 0.</p>
      <p>밥스흥신소 사장. </p>
      <br />
      <br />
      <br />
      {/* 레벨 3은 3만 볼수있음  */}
      {keyword >= utils.Level[3] && (
        <>
          <p className="title">Level 3.</p>
          <p>초이스 미제사건해결소 소장.</p>
        </>
      )}
    </Wrap>
  );
};

export default Page2;

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
