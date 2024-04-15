import styles from "./ListTitle.module.scss";

interface HeadingProps {
  text: string;
}

const ListTitle: React.FC<HeadingProps> = ({ text }) => {
  return <h2 className={styles["list-title"]}>{text}</h2>;
};

export default ListTitle;
