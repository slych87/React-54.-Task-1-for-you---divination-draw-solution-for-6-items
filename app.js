/* https://websamuraj.pl/examples/react/zadanie-wrozba/ */
//Zobacz

//WYTYCZNE
// Jeden komponent
// Wersja na 5 - zobacz wróżbę, losuje jedną z trzech wróżb
// Wersja na 6 - dodaje do trzech istniejących wróżb kolejną

class Draw extends React.Component {
  state = {
    options: ["1", "2", "3"],
    option: null,
  }

  handleShowOption = () => {
    const index = Math.floor(Math.random() * this.state.options.length)
    this.setState({
      option: this.state.options[index]
    })

  }

  render() {

    return (
      <div>
        <button onClick={this.handleShowOption}>Zobacz wróżbę</button>
        {this.state.option ? <h1>{this.state.option}</h1> : null}
      </div>
    )
  }
}

ReactDOM.render(<Draw />, document.getElementById('root'))