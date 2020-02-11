import React, { Component } from 'react'
import Axios from 'axios';
import ItemList from './components/ItemList';
import SearchBox from './components/SearchBox';

export default class App extends Component {
  state = {
    loading: true,
    items: [],
    searchItem: ""
    //Filter Items[](getAllData)
    // sortedItems: [],
    // id: 0,
    // name: "",
    // stackable: false,
    // members: false,
    // noted: false,
    // tradeable: false,
    // noteId: 1,
    // value: 0,
  }


  //SECTION API CALLS
  getAllData = async () => {
    try {
      Axios.get('//osrshelper.herokuapp.com/api/runelite').then(res => {
        console.log("Hello from GetAll Data", res);
        this.setState({
          items: res.data,
          loading: false,
          // Filtered Data
          // sortedItems: res.data,
          // id: res.data.id,
          // name: res.data.name,
          // stackable: res.data.stackable,
          // members: res.data.members,
          // noted: res.data.noted,
          // tradeable: res.data.tradeable,
          // noteId: res.data.noteId,
          // value: res.data.value
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
    this.setState({ searchItem: e.target.value })
  }


  render() {
    let filterItems = this.state.items.filter((item) => {
      return item.name.toLowerCase().includes(this.state.searchItem.toLowerCase())
    })

    return (
      <div>
        <h1 style={{ marginRight: '50%', marginLeft: "50%" }}>Items Search:
        </h1>
        <SearchBox handleInput={this.handleInput} />
        <ItemList filterItems={filterItems} />
      </div>
    )
  }
}
