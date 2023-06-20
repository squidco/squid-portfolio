import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Nav from "./components/Nav/Nav";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <ContentContainer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis
          esse voluptatem saepe. Itaque rem ad nemo doloribus vel! Omnis
          mollitia dolore ab veritatis esse deleniti natus unde reiciendis
          cupiditate.
        </p>
      </ContentContainer>
    </>
  );
}

export default App;
