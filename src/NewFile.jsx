import PropTypes from "prop-types";
import classes from "./Card.module.css";

function Card({ name, title, content, id, views }) {
  const topRated = views > 1000;
  return (
    <div className={classes.maincardblock}>
      <div className={classes.cardblock}>
        <div className={classes.card}>
          <p>
            {name}
            {topRated && "🥇"}
          </p>
          <p>{title}</p>
          <img src={`https://picsum.photos/id/${id}/200`} alt={name} />
          <p>{content}</p>
          <p>{views}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
Card.propTypes = {
  topic: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
};

Card.defaultProps = {
  content: "Here I am",
};
