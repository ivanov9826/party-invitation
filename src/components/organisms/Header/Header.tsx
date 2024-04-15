import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { colors } from "../../../theme/colors";

const Header: React.FC = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>Rubber Duck</div>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? colors.orange[2] : "white",
              };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/invitees"
            style={({ isActive }) => {
              return {
                color: isActive ? colors.orange[2] : "white",
              };
            }}
          >
            Invitees
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
