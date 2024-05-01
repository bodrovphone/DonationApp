import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import store, {persistor} from './redux/store';

import {AppState, AppStateStatus} from 'react-native';
import {checkToken} from './api/user';
import RootNavigation from './navigation/RootNavigation';

function App(): React.JSX.Element {
  const appState = React.useRef(AppState.currentState);

  React.useEffect(() => {
    // adding a subscription to app state changes - it tracks foreground/background state of the app
    const subscription = AppState.addEventListener(
      'change',
      async (nextAppState: AppStateStatus) => {
        // coming from background to foreground
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          console.log('App has come to the foreground!');
          await checkToken();
        }

        appState.current = nextAppState;
      },
    );

    (async () => {
      await checkToken();

      console.log('rendered from async IIFE');
    })();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
