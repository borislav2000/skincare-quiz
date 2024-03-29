import { Link } from "react-router-dom";

const ButtonLink = (props) => {
  return (
    <Link to={props.to} className={props.className}>
      {props.children}
    </Link>
  );
};

export default ButtonLink;
