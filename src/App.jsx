import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import * as pages from './pages';
import * as components from './components';

import { GlobalStyle } from './styles/GlobalStyles';
import Theme from './styles/Theme';

function App() {
  return (
    <ThemeProvider theme={<Theme />}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<components.Layout />}>
          <Route path="/" element={<pages.HomePage />} />
          <Route path="/민광선살인사건조사종료" element={<pages.Page1 />} />
          <Route path="/민광선살인사건조사종료/:keyword" element={<pages.Page1 />} />
          <Route path="/엉클밥" element={<pages.Page2 />} />
          <Route path="/엉클밥/:keyword" element={<pages.Page2 />} />
          <Route path="/밥스흥신소" element={<pages.Page3 />} />
          <Route path="/밥스흥신소/:keyword" element={<pages.Page3 />} />
          <Route path="/민광선" element={<pages.Page4 />} />
          <Route path="/민광선/:keyword" element={<pages.Page4 />} />
          <Route path="/바코드레코드" element={<pages.Page5 />} />
          <Route path="/바코드레코드/:keyword" element={<pages.Page5 />} />
          <Route path="/삭흔" element={<pages.Page6 />} />
          <Route path="/삭흔/:keyword" element={<pages.Page6 />} />
          <Route path="/불안전의사" element={<pages.Page7 />} />
          <Route path="/불안전의사/:keyword" element={<pages.Page7 />} />
          <Route path="/키워드암호" element={<pages.Page8 />} />
          <Route path="/키워드암호/:keyword" element={<pages.Page8 />} />
          <Route path="/PARA-Z" element={<pages.Page9 />} />
          <Route path="/PARA-Z/:keyword" element={<pages.Page9 />} />
          <Route path="/애기동산" element={<pages.Page10 />} />
          <Route path="/애기동산/:keyword" element={<pages.Page10 />} />
          <Route path="/초이스미제사건해결소" element={<pages.Page11 />} />
          <Route path="/초이스미제사건해결소/:keyword" element={<pages.Page11 />} />
          <Route path="/김기숙" element={<pages.Page12 />} />
          <Route path="/김기숙/:keyword" element={<pages.Page12 />} />
          <Route path="/성해준" element={<pages.Page13 />} />
          <Route path="/성해준/:keyword" element={<pages.Page13 />} />
          <Route path="/최진성" element={<pages.Page14 />} />
          <Route path="/최진성/:keyword" element={<pages.Page14 />} />
          <Route path="/성해숙" element={<pages.Page15 />} />
          <Route path="/성해숙/:keyword" element={<pages.Page15 />} />
          <Route path="/민서우" element={<pages.Page16 />} />
          <Route path="/민서우/:keyword" element={<pages.Page16 />} />
          <Route path="/박지원" element={<pages.Page17 />} />
          <Route path="/박지원/:keyword" element={<pages.Page17 />} />
          <Route path="/경찰보고서" element={<pages.Page18 />} />
          <Route path="/경찰보고서/:keyword" element={<pages.Page18 />} />
          <Route path="/담배" element={<pages.Page19 />} />
          <Route path="/담배/:keyword" element={<pages.Page19 />} />
          <Route path="/*" element={<components.NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
