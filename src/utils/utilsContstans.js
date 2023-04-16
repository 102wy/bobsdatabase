export const Level = {
  0: "고구마말랭이",
  1: "구운닭알",
  2: "네일영양제",
  3: "춘식이휴지통",
};

export const keywordDecode = (key) => {
  const keyword = key;
  const regex = /\/([^/]+)\//;
  const match = keyword.match(regex);
  const extracted = match && match[1];

  // 만약 '/'가 포함되어 있지 않은 경우에는 전체 keyword를 반환
  if (!extracted) {
    return decodeURI(keyword.replace(/\//g, ""));
  }

  return extracted ? decodeURI(extracted) : "";
};
