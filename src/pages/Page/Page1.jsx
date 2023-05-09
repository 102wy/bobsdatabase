import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import * as utils from "../../utils";

const Page1 = () => {
  const { pathname } = useLocation();
  const { keyword } = useParams();
  const title = utils.keywordDecode(pathname);

  useEffect(() => {
    if (keyword === utils.Level[1]) {
      window.open("https://youtu.be/BmLAoCLpE5k");
    } else return;
  }, [keyword]);

  return (
    <Wrap>
      <h2>{title}</h2>
      {/* 레벨 0은 모두가 보임 */}
      <p className="title">Level 0.</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://img.freepik.com/premium-photo/seascape-in-the-early-morning-sunrise-over-the-sea_416511-5490.jpg?w=1480"
          alt="예시이미지"
        />
      </div>
      {/* 레벨 1은 1~3이 다 볼수있음 */}
      {keyword >= utils.Level[1] && (
        <>
          <p className="title">Level 1.</p>
          <p>둥글다!</p>
        </>
      )}
      {/* 레벨 2는 2와3이 볼수있음 */}
      {keyword >= utils.Level[2] && (
        <>
          <p className="title">Level 2.</p>
          <p>주황색이다</p>
        </>
      )}
      {/* 레벨 3은 3만 볼수있음  */}
      {keyword >= utils.Level[3] && (
        <>
          <p className="title">Level 3.</p>
          <p>
            <iframe
              width="auto"
              height="315"
              src="https://www.youtube.com/embed/FHxJjFlvE7M"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </p>
        </>
      )}
    </Wrap>
  );
};

export default Page1;

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
