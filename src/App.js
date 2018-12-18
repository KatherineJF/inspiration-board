import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import NewCardForm from './components/NewCardForm';
//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // currentCard: undefined,
       cardData:[]
    };
  }

  onSelectCard = (cardId) => {

    const selectedCard = this.state.board.find((card) => {
      return card.id === cardId;
    });
    if (selectedCard) {
      this.setState({
        currentCard: selectedCard,
      });
    }
  }

  render() {
    //const { currentCard } = this.state;
        //console.log(this.state.board);




    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <Board
          url=" https://inspiration-board.herokuapp.com/boards?name=Katherine"
          boardName={`Katherine`}
           cardData={this.state.cardData}
          />

      </section>
    );
  }
}

export default App;
