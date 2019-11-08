import React from 'react';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';
import navigationService from './services/navigations';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#141419" />
        <Routes
          ref={navigatorRef => navigationService.setNavigator(navigatorRef)}
        />
      </Provider>
    </>
  );
}
