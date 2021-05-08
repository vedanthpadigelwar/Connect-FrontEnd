import React from 'react';
import MainScreen from './screens/MainScreen';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}

export default App;
