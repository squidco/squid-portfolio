import { useState } from "react";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Nav from "./components/Nav/Nav";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <ContentContainer id="about">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis
          esse voluptatem saepe. Itaque rem ad nemo doloribus vel! Omnis
          mollitia dolore ab veritatis esse deleniti natus unde reiciendis
          cupiditate.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis
          esse voluptatem saepe. Itaque rem ad nemo doloribus vel! Omnis
          mollitia dolore ab veritatis esse deleniti natus unde reiciendis
          cupiditate.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis
          esse voluptatem saepe. Itaque rem ad nemo doloribus vel! Omnis
          mollitia dolore ab veritatis esse deleniti natus unde reiciendis
          cupiditate.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis
          esse voluptatem saepe. Itaque rem ad nemo doloribus vel! Omnis
          mollitia dolore ab veritatis esse deleniti natus unde reiciendis
          cupiditate.
        </p>
      </ContentContainer>
      <ContentContainer id="projects">
        <div>Stuff inside the div</div>
        <div>Stuff inside the div</div>
        <div>Stuff inside the div</div>
        <div>Stuff inside the div</div>
      </ContentContainer>
      <ContentContainer id="resume">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis
          esse voluptatem saepe. Itaque rem ad nemo doloribus vel! Omnis
          mollitia dolore ab veritatis esse deleniti natus unde reiciendis
          cupiditate.
        </p>
      </ContentContainer>
      <ContentContainer id="contact">
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
