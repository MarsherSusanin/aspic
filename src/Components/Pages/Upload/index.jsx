import Header from "../../Layout/Header";
import exit from "../../../assets/img/icons/exit.svg";
import cloud from "../../../assets/img/icons/cloud.svg";
import "./style.css";
import { Link } from "react-router-dom";

export default function Upload() {
  return (
    <>
      <Header filter={false}></Header>
      <main className="main container-upload">
        <section className="upload-content">
          <div className="upload-content__top">
            <h1>Upload video</h1>
            <Link to="/">
              <img src={exit} alt="" className="upload-content__exit" />
            </Link>
          </div>
          <div className="upload-content__main">
            <div className="upload-content__drop">
              <Link to={"upload/1"}>
                <div className="upload-content__cloud">
                  <img src={cloud} alt="" />
                </div>
              </Link>
              <div className="upload-conent__text">
                <h2>Drop your files here, or choose from your local storage</h2>
                <h3>
                  Access to your video will be restricted until the download
                  process is complete.
                </h3>
              </div>
              <button className="upload-btn">Upload</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
