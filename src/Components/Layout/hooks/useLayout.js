import { useState } from "react";

export default function useLayout(initialValue) {
  const [video, setVideo] = useState({
    title: "TEAM LATAM",
    video: "https://www.youtube.com/embed/ajum_1JxdbE",
    img: initialValue.img,
    text: "Los Deportistas latinoamericanos que participan en Sochi 2014",
  });

  const handleVideo = (item) => {
    setVideo(item);
    console.log(item);
  };

  return {
    video,
    handleVideo,
  };
}
