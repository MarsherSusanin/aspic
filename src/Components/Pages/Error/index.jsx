import { useRouteError } from "react-router-dom";
import "./style.css";

export default function Error(params) {
  const error = useRouteError();
  return (
    <div id="error-page" className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
