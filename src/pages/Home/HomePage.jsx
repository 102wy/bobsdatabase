import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import * as utils from "../../utils";

const HomePage = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState();

  const onSearch = (e) => {
    let path = ""; // 초기 경로
    let level; // level 변수 선언
    let keywordWithoutSpace = keyword.replace(/\s+/g, ""); // 키워드에서 공백 제거

    if (!keywordWithoutSpace) {
      navigate("/");
      return;
    }

    let isLevelIncluded = false; // Level에 해당하는 단어가 검색어에 포함되어 있는지 여부를 체크하기 위한 변수

    // 검색어에 Level에 있는 단어가 포함되어 있는지 체크
    for (level in utils.Level) {
      if (keywordWithoutSpace.includes(utils.Level[level])) {
        path += `/${keywordWithoutSpace.replace(utils.Level[level], "")}/${
          utils.Level[level]
        }`; // 수정된 부분
        isLevelIncluded = true; // Level에 해당하는 단어가 검색어에 포함되어 있다면 플래그를 설정
        break;
      }
    }

    // Level에 해당하는 단어가 검색어에 포함되어 있지 않다면, 검색어를 경로에 추가
    if (!isLevelIncluded) {
      path += `/${keywordWithoutSpace}`;
    }

    // 검색어가 Level에 있는 단어로 시작하는 경우, 검색어 자체를 경로에 추가
    if (keywordWithoutSpace.startsWith(utils.Level[level])) {
      path += `/${keywordWithoutSpace}`;
    }

    navigate(path);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <Wrap>
      <h1>
        BOB'S 흥신소 <br />
        데이터베이스
      </h1>

      <SearchWrap>
        <input
          type="text"
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={onSearch}>검색</button>
      </SearchWrap>
    </Wrap>
  );
};

export default HomePage;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  h1 {
    text-align: center;
    font-size: 34px;
    padding-top: 50px;
  }
`;

const SearchWrap = styled.div`
  display: flex;
  width: 90%;
  height: 30px;
  input {
    width: 80%;
  }
  button {
    width: 20%;
  }
`;
