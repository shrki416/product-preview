import "../styles/App.css";

import { GlobalStyle } from "../styles/GlobalStyle";
import PreviewCard from "./PreviewCard";
import styled from "styled-components/macro";

function App() {
  return (
    <div>
      <GlobalStyle />
      <PreviewCard />
    </div>
  );
}

export default App;
