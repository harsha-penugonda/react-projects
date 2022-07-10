import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const prevPerson = () => {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const nextPerson = () => {
    if (index === people.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const suprisePerson = () => {
    const randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      console.log("same person");
      nextPerson();
    } else {
      setIndex(randomIndex);
    }
  };

  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="text">{text}</p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft className="left" onClick={prevPerson} />
        </button>
        <button className="next-btn">
          <FaChevronRight className="right" onClick={nextPerson} />
        </button>
      </div>
      <button className="random-btn" onClick={suprisePerson}>
        Suprise Me
      </button>
    </article>
  );
};

export default Review;
