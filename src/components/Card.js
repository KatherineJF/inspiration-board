import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

const Card = (props) => {
  console.log(props)
  const { id, text, emojii } = props;

  return (
    <section className="card">
      <section className="card__content">
      </section>
      <article>
        <h3>{text}</h3>
        <p className="card__content-text">
          {text}
        </p>
        <section className="card__content-emoji">
        {props.emoji && emoji.getUnicode(props.emoji)}
        <button onClick={() => props.deleteCardCallback(props.id)} type="button" className="card__delete">X</button>
        </section>
      </article>
    </section>
  )
}
//
// <h2 className="petdetails--name">{speciesEmoji(species)} {name} {speciesEmoji(species)}</h2>
// <img src={images[0]} alt={`${name}`} className="pet-details--image" />
Card.propTypes = {

    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    emojii: PropTypes.string.isRequired,

}
Card.propTypes = {

};

export default Card;
