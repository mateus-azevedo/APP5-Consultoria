import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

const btnVoltar = require('../imgs/btn_voltar.png');

export default class BarraNavegacao extends Component {
  render() {
    if(this.props.voltar) {
      return(
        <View style={styles.barraTitulo}>
          <Image source={btnVoltar} />
          <Text style={styles.titulo}>ATM Consultoria</Text>
        </View>
      );
    }

    return(
      <View style={styles.barraTitulo}>
        <Text style={styles.titulo}>ATM Consultoria</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  barraTitulo: {
    backgroundColor: '#CCC',
    padding: 10,
    height: 60,
    flexDirection: 'row'
  },
  titulo: {
    flex: 1, // faz o component titulo ocupar o espaço completo da tela
    fontSize: 18,
    textAlign: 'center',
    color: '#000'
  }
});
