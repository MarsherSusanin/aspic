import { useParams } from "react-router-dom";
import Header from "../../Layout/Header";
import "./style.css";

export default function Video(params) {
  const { id } = useParams();
  return (
    <>
      <Header></Header>
      <video className="video" autoPlay>
        <source
          src={
            "../../../assets/video/futaj-ogon-plamya-xromakey_(VIDEOMIN.NET).mp4"
          }
          type="video/ogg"
        />
      </video>
    </>
  );
}
