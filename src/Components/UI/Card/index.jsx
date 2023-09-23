import "./style.css";
import options from "../../../assets/img/icons/Options.png";
export default function Card(props) {
  return (
    <>
      <article className="video-card" key={props.id}>
        <img src={props.image} alt="" className="video-card__img" />
        <div className="video-card__bottom">
          {props.avatar ? (
            <img src={props.avatar} alt="" className="video-card__avatar" />
          ) : (
            <div className="video-card__avatar"></div>
          )}

          <div className="video-card__info">
            <h4 className="video-card__title">{props.title}</h4>
            <h5 className="video-card__author">{props.author}</h5>
          </div>
          <img src={options} alt="" className="video-card__options" />
        </div>
      </article>
    </>
  );
}
