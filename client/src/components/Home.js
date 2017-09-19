import React from 'React';
import axios from 'axios';

class Home extends React.Component {
  state = { dishes = [] }; 

  componentDidMount() {
    axios.get('/api/dishes')
      .then(res => this.setState( { dishes: res.data } ))
  }

}

export default Home;