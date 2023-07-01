import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./GoUp.scss";

function GoUp() {
  function goUp() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="footer">
      Cristian Foto&Video
      <FontAwesomeIcon icon={faAngleUp} bounce onClick={goUp} />
      est. 2023
    </div>
  );
}

export default GoUp;
