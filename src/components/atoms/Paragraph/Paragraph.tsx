import "./Paragraph.scss";

interface ParagraphProps {
  text: string | number;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return <p className="paragraph">{text}</p>;
};

export default Paragraph;
