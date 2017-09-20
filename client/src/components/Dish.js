
import React from 'react';
import { Link } from 'react-router-app';
import axios from 'axios';
import DishForm from './DishForm';

class Dish extends React.Component {
  state = { dish: [], editing: false}

  componentDidMount() {
    this.fetchMenu()
  }

  componentDidUpdate() {
    this.fetchMenu()
  }

  fetchMenu = () => {
    axios.get(`/api/dishes/${this.props.match.params.id}.json`)
      .then( res => this.setState({ product: res.data }) )
  }

  deleteDish = () => {
    if(confirm('Are you sure?')) {
      axios.delete(this.state.dish.url)
        .then( res=> {
          this.props.history.push('/')
        })
        .catch( res => {
          console.log('error deleting')
        })
    }
  }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing })
  }
  
  render() {
    const { editing, dish: { name, description, price } } = this.state;

    if(editing) {
      return(
        <DishForm
          product={this.state.product}
          cancelAction={this.toggleEdit}
        />
      )
    } else {
      return(
        <div>
          <h1>{name}</h1>
          <h3>{description}</h3>
          <h3>{price}</h3>
          <button onClick={this.toggleEdit}>Edit</button>
          <button onClick={this.deleteDish}>Delete</button>
          <hr />
          <Link to='/'>Menu</Link>
        </div>
      )
    }
  }
  
}

export default Dish;
