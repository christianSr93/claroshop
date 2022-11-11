import React from "react";
import "./styles/Layout.scss";
import teamLatam from "../../assets/img/team-latam.png";
import experiencia from "../../assets/img/experiencia.png";
import velocidad from "../../assets/img/velocidad-riesgo.png";
import meets from "../../assets/img/travel-meets-fashion.png";
import useLayout from "./hooks/useLayout";
import Counter from "../Counter/Counter";

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
    video: "https://www.youtube.com/embed/owGHU-F0EfY",
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
  const { video, handleVideo } = useLayout(VIDEOS[0]);

  return (
    <>
      <div className="videoPlayer">
        <Counter countDownDate={'12/01/2022 00:00:00'}></Counter>
        <iframe
          width="560"
          height="315"
          src={`${video.video}?autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="videoOptions">
        <div className="title">
          <h2>CLARO SPORTS EN SOCHI 2014</h2>
        </div>
        <div className="options">
          {VIDEOS.map((e) => (
              e.title === video.title ? (
                <div className="circleContainer">
                  <div className="circle selected">
                    <span> {e.text} </span>
                  </div>
                  <span> {e.title} </span>
                </div>
              ) : (
                <div className="circleContainer">
                  <div className="circle">
                    <img onClick={() => handleVideo(e)} src={e.img} alt="Logo" />
                  </div>
                  <span> {e.title} </span>
                </div>
              )
          ))}
        </div>
      </div>
    </>
  );
}
