import "./style.css";

export default function Button(props) {
  return (
    <button>
      <img src={props.img} alt="тык" />
      {props.text}
    </button>
  );
}
