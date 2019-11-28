import React,{Component} from 'react';
import { Alert } from 'react-native'

import Login from '../interfaces/login';
import Inicio from '../interfaces/inicio';

 class LoginContainer extends Component{

  constructor(props){
    super(props)
    this.state={
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

  miEventoDeLogin = () => {

    const usuario = this.state.usuario;
    const contrasena = this.state.contrasena;

    if (usuario==="fernando"&& contrasena==="fer1234") {
      Alert.alert("Hola "+usuario,"Bienvenido");
      this.props.navigation.navigate('Inicio');  
    }
    else{
       Alert.alert("error","Usuario o Contraseña incorrecta");
    }
  };

  render() {

    const { usuario, contrasena } = this.state;
    
    return (
    <Login
      miOnPressBoton={this.miEventoDeLogin}
      miOnChangeDeUsuario={this.miEventoUsuario}
      miOnChangeDeContraseña={this.miEventoContraseña}
      usuario={usuario}
      contrasena={contrasena}/>
    );
  }
}

export default  LoginContainer;