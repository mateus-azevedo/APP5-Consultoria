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

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
  render() {
    return(
      <View style={styles.screenBackground}>
        <StatusBar 
          backgroundColor= '#B9C941'
        />
        
        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo= '#B9C941' />

        <View style={styles.cabecalho}>
          <Image source={detalheClientes} />
          <Text style={styles.txtTitulo} >Nossos Clientes</Text>
        </View>

        <View style={styles.detalheCliente}>
          <Image source={cliente1} />
          <Text style={styles.txtDetalheCliente}>Lorem Ipsum it malia</Text>
        </View>

        <View style={styles.detalheCliente}>
          <Image source={cliente2} />
          <Text style={styles.txtDetalheCliente}>Lorem Ipsum it malia</Text>
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
    color: '#B9C941',
    fontSize: 30,
    marginLeft: 10,
    marginTop: 25,
    fontWeight: 'bold'
  },
  detalheCliente: {
    padding: 20,
    marginTop: 10
  },
  txtDetalheCliente: {
    fontSize: 18,
    marginLeft: 20
  }
}); 