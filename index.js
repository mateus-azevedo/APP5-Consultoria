import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// importar o componente barra navegação
import BarraNavegacao from './src/components/BarraNavegacao';

export default class app5 extends Component {
  render() {
    return(
      <BarraNavegacao />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
