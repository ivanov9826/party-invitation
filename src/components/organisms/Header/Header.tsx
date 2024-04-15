import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>Rubber Duck</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/invitees">Invitees</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
