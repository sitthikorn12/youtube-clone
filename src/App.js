import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import  Home  from "./pages/Home";
import  Video  from "./pages/Video";
import SignIn from "./pages/SignIn";
import Video1 from "./pages/Video2";
import Video2 from "./pages/Video2";
import Video3 from "./pages/Video3";
import Video4 from "./pages/Video4";
import Video5 from "./pages/Video5";
import Video6 from "./pages/Video6";
import Video7 from "./pages/Video7";
import Video8 from "./pages/Video8";


const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex:7;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (

    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      <BrowserRouter>
      <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main>
        <Navbar/>
        <Wrapper>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path=":signin" element={<SignIn/>} />
            <Route path="video">
              <Route path=":id" element={<Video/>} />
            </Route>
            <Route path="video1">
              <Route path=":id" element={<Video1/>} />
            </Route>
            <Route path="video2">
              <Route path=":id" element={<Video2/>} />
            </Route>
            <Route path="video3">
              <Route path=":id" element={<Video3/>} />
            </Route>
            <Route path="video4">
              <Route path=":id" element={<Video4/>} />
            </Route>
            <Route path="video5">
              <Route path=":id" element={<Video5/>} />
            </Route>
            <Route path="video6">
              <Route path=":id" element={<Video6/>} />
            </Route>
            <Route path="video7">
              <Route path=":id" element={<Video7/>} />
            </Route> <Route path="video8">
              <Route path=":id" element={<Video8/>} />
            </Route>

          </Route>
        </Routes>
        </Wrapper>
      </Main>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;
