import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import Card from "./components/Card";
import Loading from "./components/Loading";
import Navigation from "./components/Navigation";
import data from "./data/data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleLogo: true,
      loading: true,
      cards: []
    };
    this.onToggleLogo = this.onToggleLogo.bind(this);
    this.showFront = this.showFront.bind(this);
    this.showBack = this.showBack.bind(this);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }
  componentWillMount() {
    this.setState({
      cards: data
    });
  }
  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          loading: false
        }),
      3000
    );
  }
  onToggleLogo(e) {
    this.setState(prevState => ({
      toggleLogo: !prevState.toggleLogo
    }));
  }

  showFront(card) {
    console.log("showFront");
    let cards = this.state.cards;
    cards[card.id].animation = "card";
    this.setState({
      cards
    });
  }
  showBack(card) {
    console.log("showBack");
    let cards = this.state.cards;
    cards[card.id].animation = "card card-flip";
    this.setState({
      cards
    });
  }
  openNav(params) {
    document.getElementById("myNav").style.width = "100%";
  }

  closeNav(params) {
    document.getElementById("myNav").style.width = "0%";
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className={
              this.state.toggleLogo
                ? "static-logo"
                : "static-logo animated jello"
            }
            alt="logo"
            onMouseEnter={this.onToggleLogo}
            onMouseLeave={this.onToggleLogo}
            onClick={this.openNav}
          />
          <h1
            className={
              this.state.toggleLogo
                ? "menu-hidden"
                : "menu animated bounceInDown"
            }
          >
            Menu
          </h1>
          <Navigation closeNav={this.closeNav} />
        </header>
        {this.state.loading ? (
          <Loading />
        ) : (
          <div className="Grid animated bounceInUp">
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                card={card}
                showFront={this.showFront}
                showBack={this.showBack}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
