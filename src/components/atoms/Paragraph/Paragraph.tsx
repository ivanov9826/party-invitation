import style from "./Paragraph.module.scss";

interface ParagraphProps {
  text: string | number;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return <p className={style.paragraph}>{text}</p>;
};

export default Paragraph;
