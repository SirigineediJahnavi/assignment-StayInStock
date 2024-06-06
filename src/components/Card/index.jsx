/* eslint-disable react/prop-types */
import "./index.css";

const Card = (props) => {
  const { each } = props;
  const { image, head, para } = each;

  return (
    <div className="card">
      <img src={image} alt={head} className="smallimage"/>
      <h3 className="head">{head}</h3>
      <p>{para}</p>
    </div>
  );
};

export default Card;
