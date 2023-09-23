import "./style.css";
import avatar from "../../../assets/img/avatar.svg";
const Avatar = (props) => {
  return (
    <>
      <div className="avatar">
        {avatar ? (
          <img src={props.avatar} alt="avatar" className="logo-image" />
        ) : (
          <img src={avatar} alt="avatar" className="logo-image" />
        )}
      </div>
    </>
  );
};
export { Avatar };
