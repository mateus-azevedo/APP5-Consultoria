import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';

export default class app5 extends Component {
  render() {
    return(
      <Navigator 
        initialRoute={/* objeto routa */}
        renderScene={(route, navigator) => {
          /* definir a Cena com base na rota */
        }}
      />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
