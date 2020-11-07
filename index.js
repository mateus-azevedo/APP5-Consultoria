import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';

export default class app5 extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: 'a'}}
        renderScene={(route, navigator) => {
          /* definir a Cena com base na rota */
          if (route.id === 'a') {
            // exibir a CenaPrincipal
            return <CenaPrincipal navigator={navigator} />;
          }

          if (route.id === 'b') {
            // exibir a CenaClientes
            return <CenaClientes navigator={navigator} />;
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
