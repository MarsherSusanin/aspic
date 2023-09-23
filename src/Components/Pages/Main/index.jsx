import Header from "../../Layout/Header";
import VideoList from "../../Layout/VideoList";

import "./style.css";

export default function Main(params) {
  return (
    <>
      <Header></Header>
      <main className="main container">
        <VideoList />
      </main>
    </>
  );
}
