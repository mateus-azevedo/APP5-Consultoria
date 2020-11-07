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

const detalheContatos = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
  render() {
    return(
      <View>
        <StatusBar 
          backgroundColor= '#CCC'
        />
        
        <BarraNavegacao voltar navigator={this.props.navigator} />

        <View style={styles.cabecalho}>
          <Image source={detalheContatos} />
          <Text style={styles.txtTitulo} >Contatos</Text>
        </View>

        <View style={styles.detalheContatos}>
          <Text style={styles.txtContatos} >TEL: (21)1234-1234</Text>
          <Text style={styles.txtContatos} >CEL: (21)94321-4321</Text>
          <Text style={styles.txtContatos} >EMAIL: contato@atmconsultoria.com</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20
  },
  txtTitulo: {
    color: '#61BD8C',
    fontSize: 30,
    marginLeft: 10,
    marginTop: 25,
    fontWeight: 'bold'
  },
  detalheContatos: {
    marginTop: 20,
    padding: 20
  },
  txtContatos: {
    fontSize: 18
  }
}); 