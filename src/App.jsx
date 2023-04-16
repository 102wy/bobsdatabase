import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import * as pages from "./pages";
import * as components from "./components";

import { GlobalStyle } from "./styles/GlobalStyles";
import Theme from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={<Theme />}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<components.Layout />}>
          <Route path="/" element={<pages.HomePage />} />
          <Route path="/오렌지" element={<pages.Page1 />} />
          <Route path="/오렌지/:keyword" element={<pages.Page1 />} />
          <Route path="/감자" element={<pages.Page2 />} />
          <Route path="/감자/:keyword" element={<pages.Page2 />} />
          <Route path="/오이" element={<pages.Page3 />} />
          <Route path="/오이/:keyword" element={<pages.Page3 />} />
          <Route path="/딸기" element={<pages.Page4 />} />
          <Route path="/딸기/:keyword" element={<pages.Page4 />} />
          <Route path="/호박" element={<pages.Page5 />} />
          <Route path="/호박/:keyword" element={<pages.Page5 />} />
          <Route path="/밥" element={<pages.Page6 />} />
          <Route path="/밥/:keyword" element={<pages.Page6 />} />
          <Route path="/가지" element={<pages.Page7 />} />
          <Route path="/가지/:keyword" element={<pages.Page7 />} />
          <Route path="/고양이" element={<pages.Page8 />} />
          <Route path="/고양이/:keyword" element={<pages.Page8 />} />
          <Route path="/강아지" element={<pages.Page9 />} />
          <Route path="/강아지/:keyword" element={<pages.Page9 />} />
          <Route path="/자두" element={<pages.Page10 />} />
          <Route path="/자두/:keyword" element={<pages.Page10 />} />
          <Route path="/멜론" element={<pages.Page11 />} />
          <Route path="/멜론/:keyword" element={<pages.Page11 />} />
          <Route path="/별" element={<pages.Page12 />} />
          <Route path="/별/:keyword" element={<pages.Page12 />} />
          <Route path="/치이카와" element={<pages.Page13 />} />
          <Route path="/치이카와/:keyword" element={<pages.Page13 />} />
          <Route path="/바나나" element={<pages.Page14 />} />
          <Route path="/바나나/:keyword" element={<pages.Page14 />} />
          <Route path="/똠양꿍" element={<pages.Page15 />} />
          <Route path="/똠양꿍/:keyword" element={<pages.Page15 />} />
          <Route path="/쌀국수" element={<pages.Page16 />} />
          <Route path="/쌀국수/:keyword" element={<pages.Page16 />} />
          <Route path="/도넛" element={<pages.Page17 />} />
          <Route path="/도넛/:keyword" element={<pages.Page17 />} />
          <Route path="/안대" element={<pages.Page18 />} />
          <Route path="/안대/:keyword" element={<pages.Page18 />} />
          <Route path="/이불" element={<pages.Page19 />} />
          <Route path="/이불/:keyword" element={<pages.Page19 />} />
          <Route path="/꿈" element={<pages.Page20 />} />
          <Route path="/꿈/:keyword" element={<pages.Page20 />} />
          <Route path="/*" element={<components.NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
