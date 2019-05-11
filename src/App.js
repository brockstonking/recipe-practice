import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import Display from './components/display'

class App extends Component {
  constructor(){
    super();

    this.state = {
      recipe: '',
      link: '',
      ingredientsInput: '',
      nameInput: '',
      image: '',
      recipes: []
    }

    this.handleIngredients = this.handleIngredients.bind( this )
    this.handleName = this.handleName.bind( this )
    this.search = this.search.bind( this )
    this.componentDidMount = this.componentDidMount.bind( this )
  }

  componentDidMount(){
    Axios.get(`http://localhost:3001/api/recipe/?ingredients=${ this.state.ingredientsInput }&name=${ this.state.nameInput }`).then( results => {
      console.log(results.data.results[0])
      this.setState({
        recipe: results.data.results[0].title,
        link: results.data.results[0].href,
        image: results.data.results[0].thumbnail,
        recipes: results.data.results
      })
      console.log(results.data.results.length)
    })
    console.log(this.state.image)
  }

  handleIngredients(val){
    this.setState({
      ingredientsInput: val
    })
    console.log(this.state.handleIngredients)
  }

  handleName(e){
    this.setState({
      nameInput: e
    })
    console.log(this.state.handleName)
  }

  search(){
    Axios.get(`http://localhost:3001/api/recipe/?ingredients=${ this.state.ingredientsInput }&name=${ this.state.nameInput }`).then( results => {
      console.log(results.data.results[0])
      this.setState({
        recipe: results.data.results[0].title,
        link: results.data.results[0].href,
        image: results.data.results[0].thumbnail,
        recipes: results.data.results
      })
    })
    this.setState({
      ingredientsInput: '',
      nameInput: ''
    })

    console.log(this.state.image)
  }

  render(){
    let margins = {
      marginBottom: '100px'
    }
    let list = this.state.recipes.map((e, i) => {
      return <Display key={ i } name={ e.title } link={ e.href } image={ e.thumbnail }/>
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>

          <input placeholder='Ingredients' onChange={ e => {this.handleIngredients(e.target.value)} }/>
          <input placeholder='Name' onChange={ e => this.handleName(e.target.value) }/>
          </div>
          <div>
            <button onClick={ this.search }>Search</button>
          </div>
          <div style={ margins }>
            { list }
          </div>

        </header>
      </div>
    );
  }
}

export default App;
