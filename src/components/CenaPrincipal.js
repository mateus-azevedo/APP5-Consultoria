import React, { Component } from 'react';
import {
  View,
  StatusBar
} from 'react-native';

// importar o componente barra navegação
import BarraNavegacao from './BarraNavegacao';

export default class CenaPrincipal extends Component {
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