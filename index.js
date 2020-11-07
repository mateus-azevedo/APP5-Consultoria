import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';

export default class app5 extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: 'principal'}}
        renderScene={(route, navigator) => {
          /* definir a Cena com base na rota */
          if (route.id === 'principal') {
            // exibir a CenaPrincipal
            return <CenaPrincipal navigator={navigator} />;
          }

          if (route.id === 'clientes') {
            // exibir a CenaClientes
            return <CenaClientes navigator={navigator} />;
          }

          if (route.id === 'contatos') {
            // exibir a CenaContatos
            return <CenaContatos navigator={navigator} />;
          }

          if (route.id === 'empresa') {
            // exibir a CenaEmpresa
            return <CenaEmpresa navigator={navigator} />;
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
