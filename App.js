import React from 'react';
import {View} from 'react-native';
import {Provider as PaperProvider, Headline, Text} from 'react-native-paper';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './app/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <PaperProvider>
          <View
            style={{
              display: 'flex',
              flex: 1,
              padding: '5%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Headline>Welcome to React Native</Headline>
            <Text>Boilerplate for Redux with React Native</Text>
            <View style={{margin: '15%'}}></View>
            <Text
              style={{
                textAlign: 'center',
                padding: '5%',
                lineHeight: 30,
              }}>
              With package Redux, Firebase, Geolocation, Camera, Google SignIn,
              Thermal Printer
            </Text>
          </View>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};
export default App;
