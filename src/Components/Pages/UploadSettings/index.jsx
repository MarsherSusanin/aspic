import { useParams } from "react-router-dom";
import Header from "../../Layout/Header";
import "./style.css";

export default function UploadSettings(params) {
  const { id } = useParams();
  return (
    <>
      <Header></Header>
    </>
  );
}
