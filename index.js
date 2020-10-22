import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StatusBar
} from 'react-native';

// importar o componente barra navegação
import BarraNavegacao from './src/components/BarraNavegacao';

export default class app5 extends Component {
  render() {
    return(
      <View>
        <StatusBar 
          backgroundColor= '#CCC'
        />
        
        <BarraNavegacao />
      </View>
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
