import "./style.css";
const FilterTag = (props) => {
  return (
    <>
      <button className="btn-filter-tag">{props.text}</button>
    </>
  );
};
export { FilterTag };
