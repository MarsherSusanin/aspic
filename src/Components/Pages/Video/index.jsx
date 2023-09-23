import { Link, useParams } from "react-router-dom";
import Header from "../../Layout/Header";
import likes from "../../../assets/img/icons/likes.svg";
import dislikes from "../../../assets/img/icons/dislikes.svg";
import "./style.css";
import { FilterTag } from "../../UI/Tag";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Video(params) {
  const [video, setVideo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const apiUrl = "/api/cards.json";
    axios.get(apiUrl).then((responce) => {
      const allVideo = responce.data;
      setVideo(allVideo);
    });
  }, [setVideo]);
  return (
    <>
      <Header></Header>
      <video className="video" controls autoPlay>
        <source src="/video/source_1.mp4" type="video/mp4" />
      </video>
      <main className="main container main-info">
        {!video || video.length === 0 ? (
          <h1>Загрузка видео</h1>
        ) : (
          <section className="info">
            <h2 className="info-title">{}</h2>
            <div className="info-bottom">
              <h3 className="info-views">2 100 000 views</h3>
              <div className="info-metriks">
                <div className="info-likes">
                  <img src={likes} alt="" />
                  <h3>53k likes</h3>
                </div>
                <div className="info-likes">
                  <img src={dislikes} alt="" />
                  <h3>1000k dislikes</h3>
                </div>
              </div>
            </div>
          </section>
        )}
        <aside className="recommend-video">
          <div className="recommend-tags">
            <FilterTag text="Recommend" />
          </div>
          {/* <div className="recommend-list">
            {video.map((elem, i) => {
              return (
                <article key={i} className="recommend-card">
                  <Link to={`/video/:${i}`}>
                    <img
                      src={elem.image}
                      alt=""
                      className="recommend-card__image"
                    />
                    <div className="recommend-card__info">
                      <h3>{elem.title}</h3>
                      <h6>{elem.author}</h6>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div> */}
        </aside>
      </main>
    </>
  );
}
