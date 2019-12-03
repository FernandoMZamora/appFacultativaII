import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import Crear from './../components/crear';

class CrearContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            url: '',

            estadoEnGuardado: 'start',
        };
    }

    miEventoCambiarTitulo = (title) => {
        this.setState({
            title: title,
            estadoEnGuardado: 'start',
        });
    }

    miEventoCambiarURL = (url) => {
        this.setState({
            url: url,
            estadoEnGuardado: 'start',
        })
    }

    miEventoPressGuardar = () => {

        this.setState({
            estadoEnGuardado: 'loading',
        })

        const db = firebase.firestore();

        const {
            title,
            url,
        } = this.state;

        db
        .collection('photos')
        .add({
            title: title,
            url: url,
        })
        .then(() => {
            this.setState({
                title: '',
                url: '',
                estadoEnGuardado: 'saved',
            })
        })
        .catch((error) => {
            this.setState({
                estadoEnGuardado: 'error',
            })
        })
    }

    render() {

        const { 
            title,
            url,
            estadoEnGuardado,
        } = this.state

        return(
            <Crear
                title={title}
                miEventoCambiarTitulo={this.miEventoCambiarTitulo}
                url={url}
                miEventoCambiarURL={this.miEventoCambiarURL}
                miEventoPressGuardar={this.miEventoPressGuardar}
                estadoEnGuardado={estadoEnGuardado}
            />
        )

    }

}

export default CrearContainer;