import "./style.css";
import logo from "../../../assets/img/logo.svg";
const Logo = () => {
  return (
    <>
      <div className="logo-block">
        <img src={logo} alt="logo" className="logo-image" />
        <h2 className="logo-text">Holodec</h2>
      </div>
    </>
  );
};
export { Logo };
