import React,{Component} from 'react';
import { Alert } from 'react-native'

import Login from '../interfaces/login';
import Inicio from '../interfaces/inicio';
import Abecedario from '../interfaces/pant-abecedario';
import Numeros from '../interfaces/pant-numeros';

 class LoginContainer extends Component{

  constructor(props){
    super(props)
    this.state={
      vista: 'login',
      usuario: '',
      contrasena: '',
    }
  }

  miEventoUsuario=(data)=>{
    this.setState({
      usuario: data,
    });
  }
  
  miEventoContraseña=(data)=>{
    this.setState({
      contraseña: data,
    });
  }

  cambiarInterfaz = (interfaz) => {
    this.setState({
      vista: interfaz,
    });
  };

  miEventoDeLogin = (data) => {
        
    this.setState({
        notaUsuario: data, 
    });
  };

  render() {

    const { vista, notaUsuario } = this.state;

    if(vista === 'login') {
        return (
            <Login
                cambiarInterfaz={this.cambiarInterfaz}
                miOnChangeDeUsuario={this.miEventoUsuario}
                miOnChangeDeContraseña={this.miEventoContraseña}
                usuario={notaUsuario}
            />
        );
    }

    if(vista === 'inicio') {
        const {notaUsuario} = this.state 
        return (
            <Inicio
                cambiarInterfaz={this.cambiarInterfaz}
                campoTexto={notaUsuario}
            />
        );
    }

    if(vista === 'pant-abecedario') {
      return (
          <Abecedario
              cambiarInterfaz={this.cambiarInterfaz}
          />
      );
    }

    if(vista === 'pant-numeros') {
      return (
          <Numeros
              cambiarInterfaz={this.cambiarInterfaz}
          />
      );
    }
  }
}

export default  LoginContainer;