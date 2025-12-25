import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  return (
    <nav>
      <div className="me-btn">
        <FontAwesomeIcon icon={faUser} />
        <label htmlFor="">Me</label>
      </div>
    </nav>
  );
}
