import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

const middlewares = [ReduxThunk];
const enhancer = composeWithDevTools({
  // Options: https://github.com/jhen0409/react-native-debugger#options
})(
  applyMiddleware(...middlewares)
);

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB3BThhx_Tt0T1_pogBAvMd-L8jZJOnnAg',
      authDomain: 'accountrecord-a3ac7.firebaseapp.com',
      databaseURL: 'https://accountrecord-a3ac7.firebaseio.com',
      storageBucket: 'accountrecord-a3ac7.appspot.com',
      messagingSenderId: '1039505674017'
    };

    firebase.initializeApp(config);
  }


  render() {
    const store = createStore(reducers, {}, enhancer);

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
