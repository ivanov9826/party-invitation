import { NavLink } from "react-router-dom";
import Title from "../../components/atoms/Title/Title";
import style from "./styles.module.scss";

const Home: React.FC = () => {
  return (
    <div>
      <Title text="Party Invitation Home page" size="big" />
      <span className={style.description}>
        This is the home page the party planing app.There are many variations of passages of Lorem Ipsum available, but
        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look
        even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to
        repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a
        dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem
        Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </span>
      <NavLink to="/invitees" className={style.link}>
        Click here to view partners within 100 km range of the office
      </NavLink>
    </div>
  );
};

export default Home;
