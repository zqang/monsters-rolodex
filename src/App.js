import './App.css';
import {Component} from 'react';
import {CardList} from './component/card-list/card-list'
import {SearchBox} from './component/search-box/search-box'

class App extends Component {
  constructor(){
    super()

    this.state={
      monsters: [],
      searchfield: ''
    }
    //if you don wan use es6 function then need to use this 
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({searchfield: e.target.value})
  }

  render(){
    const{ monsters, searchfield} = this.state;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchfield.toLowerCase())
      )
    return(
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox  
          placeholder='search monsters' 
          handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }

}

export default App;
