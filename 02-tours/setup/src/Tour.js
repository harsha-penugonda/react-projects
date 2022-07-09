import React, { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  const { id, name, info, image, price } = tour;
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>{readMore ? "read less" : "read more"}</button>
        </p>
        <div className="tour-actions">
          <button className="delete-btn" onClick={() => removeTour(id)}>
            Not interested
          </button>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
