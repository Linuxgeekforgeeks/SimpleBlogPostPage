import { BeatLoader } from "react-spinners";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader">
      <div className="loader-controller">
        <BeatLoader color="#36d7b7" />
      </div>
    </div>
  );
}

export default Loader;
