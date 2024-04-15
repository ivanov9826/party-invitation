import "./ListTitle.scss";

interface HeadingProps {
  text: string;
}

const ListTitle: React.FC<HeadingProps> = ({ text }) => {
  return <h2 className="list-title">{text}</h2>;
};

export default ListTitle;
