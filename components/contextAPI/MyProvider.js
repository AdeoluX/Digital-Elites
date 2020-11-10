import React, {Component} from 'react';
import MyContext from './MyContext';

class MyProvider extends Component {
  state = {
    Test1: '1111111111',
    Test2: '2222222222',
    Test3: '3333333333',
    Test4: '4444444444',
    Test5: '5555555555',
  };

  render() {
    return (
      <MyContext.Provider value="Im the value">
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export default MyProvider;
