import Card from "../../UI/Card";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function VideoList() {
  const [isLoading, setLoading] = useState(false);
  const [video, setVideo] = useState([]);
  useEffect(() => {
    const apiUrl = "api/cards.json";
    axios.get(apiUrl).then((responce) => {
      const allVideo = responce.data;
      setVideo(allVideo);
    });
  }, [setVideo]);
  console.log(video);
  if (!video || video.length === 0) {
    return (
      <>
        <h1>Загружаем видео...</h1>
      </>
    );
  } else {
    return (
      <>
        <section className="video-grid">
          {video.map((elem, i) => {
            return (
              <Link to={`/video/${i}`} key={i}>
                <Card
                  id={i}
                  title={elem.title}
                  author={elem.author}
                  image={elem.image}
                  avatar={elem.avatar}
                />
              </Link>
            );
          })}
        </section>
      </>
    );
  }
}
