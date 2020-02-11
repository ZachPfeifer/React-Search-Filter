import React, { Component } from 'react'
import Axios from 'axios';
import ItemList from './components/ItemList';
import SearchBox from './components/SearchBox';

export default class App extends Component {
  state = {
    loading: true,
    items: [],
    searchItem: []
  }


  //SECTION API CALLS
  getAllData = async () => {
    try {
      Axios.get('//osrshelper.herokuapp.com/api/runelite').then(res => {
        console.log("Hello from GetAll Data", res);
        this.setState({
          items: res.data,
          loading: false,
        })
      })
    } catch (error) {
      console.log(error);
    }
  }


  //SECTION Mounted API Data
  componentDidMount() {
    this.getAllData()
    console.log("This is state", this.state);
  }


  handleInput = (e) => {
    e.preventDefault();
    this.setState({ searchItem: e.target.value })
  }


  render() {


    let filterItems = this.state.items.filter((item) => {
      return item.name.toLowerCase().includes(this.state.searchItem)
    })

    return (
      <div className="container-fluid">
        <div className="row mx-auto">
          <div className="col-md-6 offset-md-6">
            <h1>Items Search:</h1>
            <SearchBox handleInput={this.handleInput} />
          </div>
        </div>
        <div className="row mt-5">
          <h2 className="offset-md-6">Search Results: </h2>
          <div className="col-md-6 offset-md-6">
            <ItemList filterItems={filterItems} />
          </div>
        </div>
      </div>
    )
  }
}
