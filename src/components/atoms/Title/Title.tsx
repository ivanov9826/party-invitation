import styles from "./Title.module.scss";

interface HeadingProps {
  text: string;
  size: string;
}

const Title: React.FC<HeadingProps> = ({ text, size }) => {
  return <h2 className={styles[`title-${size}`]}>{text}</h2>;
};

export default Title;
