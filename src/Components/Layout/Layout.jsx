import React, { useState } from "react";
import "./styles/Layout.scss";
import teamLatam from "../../assets/img/team-latam.png";
import experiencia from "../../assets/img/experiencia.png";
import velocidad from "../../assets/img/velocidad-riesgo.png";
import meets from "../../assets/img/travel-meets-fashion.png";

const VIDEOS = [
  {
    title: "TEAM LATAM",
    video: "https://www.youtube.com/embed/ajum_1JxdbE",
    img: teamLatam,
    text: "Los Deportistas latinoamericanos que participan en Sochi 2014",
  },
  {
    title: "TRAVEL MEETS FASHION",
    video: "https://www.youtube.com/embed/Bk6qrBrqAqo",
    img: experiencia,
    text: "Los Deportistas latinoamericanos que participan en Sochi 2014",
  },
  {
    title: "VELOCIDAD Y RIESGO",
    video: "https://www.youtube.com/embed/rzj4FFi7wt8",
    img: velocidad,
    text: "Los Deportistas latinoamericanos que participan en Sochi 2014",
  },
  {
    title: "EXPERIENCIA MULTIMEDIA",
    video: "https://www.youtube.com/embed/4ysjURAArmg",
    img: meets,
    text: "Los Deportistas latinoamericanos que participan en Sochi 2014",
  },
];
export default function Layout() {
  const [video, setVideo] = useState({
    title: "TEAM LATAM",
    video: "https://www.youtube.com/embed/ajum_1JxdbE",
    img: teamLatam,
    text: "Los Deportistas latinoamericanos que participan en Sochi 2014",
  });

  const handleVideo = (item) => {
    setVideo(item);
    console.log(item);
  };

  return (
    <>
      <div className="videoPlayer">
        <iframe
          width="560"
          height="315"
          src={video.video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="videoOptions">
        <div className="title">
          <h2>CLARO SPORTS EN SOCHI 2014</h2>
        </div>
        <div className="options">
          {VIDEOS.map((e) => (
            <div>
              <img onClick={() => handleVideo(e)} src={e.img} alt="Logo" />
              <span> {e.title} </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
