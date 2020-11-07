import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';

// importar o componente barra navegação
import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
  render() {
    return(
      <View style={styles.screenBackground}>
        <StatusBar 
          backgroundColor= '#EC7148'
        />
        
        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo= '#EC7148' />

        <View style={styles.cabecalho}>
          <Image source={detalheEmpresa} />
          <Text style={styles.txtTitulo} >A Empresa</Text>
        </View>

        <View style={styles.detalheEmpresa}>
          <Text style={styles.txtEmpresa} >Lorem ipsum Lorem ipsum it ad moetano Athesthan e Ragnar Lothbrok</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenBackground: { 
    flex: 1, 
    backgroundColor: '#FFF'
  },
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20
  },
  txtTitulo: {
    color: '#EC7148',
    fontSize: 30,
    marginLeft: 10,
    marginTop: 25,
    fontWeight: 'bold'
  },
  detalheEmpresa: {
    marginTop: 20,
    padding: 20
  },
  txtEmpresa: {
    fontSize: 18
  }
}); 