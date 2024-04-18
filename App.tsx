import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigation from './navigation/MainNavigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;
