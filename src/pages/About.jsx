import React from "react";
import { v4 as uuid4 } from "uuid";


export default function About() {
  const images = [
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
  ];

  return (
    <main className="flex flex-col animate-fadeIn">
      <h1 className="outline text-center" id="about">
        About Me
      </h1>
      <p className="text-base">
        As you might've seen on the landing page, my name is Anthony Pillow. I'm
        more than just a Web Dev. I am a drummer, scholar, motorcycle rider,
        photographer, rock climber, surfer, long boarder, gamer, friend, brother,
        and son. I've always been drawn to computers and technology but growing
        up I never thought I had what it took to code. Come to find out it just
        takes a lot of patience and some padded walls so you don't hurt your
        head when you slam it after realizing the error you had been searching
        for since last week was a typo.
      </p>
      <br />
      <p className="text-base">
        Learning to code has been one of the best decisions of my life. I've
        always loved to solve problems and what is coding if not that?
      </p>
      <br />
      <div className="flex">
        {
          images.map((image) => (
            <img key={uuid4()} src={image.src} alt={image.alt} className=""/>
          ))
        }
      </div>
    </main>
  );
}
