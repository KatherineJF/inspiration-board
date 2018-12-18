import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
//import CARD_DATA from '../data/card-data.json';

class Board extends Component {

  constructor(props){
    super(props);

    this.state = {
      cards: [],

    }
  }

//   displayCards = () => {
//   return this.state.cards.map((card, i) => {
//     return <Card
//       key={i}
//       id={card.id}
//       text={card.card.text}
//       emoji={card.card.emoji}
//
//       />
//   });
// }

  componentDidMount() {
    console.log("The component did in fact mount");
    const GET_ALL_CARDS_URL = " https://inspiration-board.herokuapp.com/boards/Katherine/cards";

    axios.get(GET_ALL_CARDS_URL)
    .then((response) => {
      console.log(response)
      const boardCards = response.data.map((cardData) =>{
      return cardData['card']
    });

      this.setState({
        cards: boardCards,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }


  addCard = (cardData) => {
    console.log("Trying to add card to the boards component");
    console.log(cardData, "cardData");
    axios.post(" https://inspiration-board.herokuapp.com/boards/Katherine/cards", cardData)
      .then((response) => {
        // What should we do when we know the post request worked?
        console.log('we definitely have a new card!', cardData);

        const updatedBoard = [ ...this.state.cards, cardData]

        this.setState({
          cards: updatedBoard,
        })
      })
      .catch((error) => {
        // What should we do when we know the post request failed?
      });
  }

  removeCard = (cardId) => {
    console.log('remove card')
    let deleteIndex = -1;
    const { cards } = this.state

    cards.forEach((card, index) => {
      if (cardId === card.id) {
        deleteIndex = index;
      }
    })

    cards.splice(deleteIndex, 1);
    this.setState({
      cards
    })


    const url = 'https://inspiration-board.herokuapp.com/cards/'
    axios.delete(url + cardId)
    .then((response) => {

      this.setState({
        errorMessage: `Card Deleted`,
      })
    })
    .catch((error) => {
      let { errors } = this.state
      errors.push(error.message)

      this.setState({
        errors: errors
      })
    })
  }


  render() {
    console.log(this.state.cards)
    const boardList = this.state.cards.map((card) => {
      console.log(card.id);
      return <Card
      {...card}
      key={card.id}
                />
      });

    return (
      <div className="board">
      <section>
      <NewCardForm
        addCardCallback={ this.addCard }
        />
      </section>
      { boardList}
      </div>



    )
  }
}

Board.propTypes = {

}

export default Board;
