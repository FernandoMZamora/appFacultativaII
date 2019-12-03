import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import Editar from './../components/editar';

class EditarContainer extends Component {

    constructor(props) {
        super(props);

        const photoParaActualizar = props.navigation.getParam('photoParaActualizar', {});

        this.state = {
            key: photoParaActualizar.key,
            title: photoParaActualizar.title,
            url: photoParaActualizar.url,

            estadoEnEditado: 'start',
        };
    }

    miEventoCambiarTitulo = (title) => {
        this.setState({
            title: title,
            estadoEnEditado: 'start',
        });
    }

    miEventoCambiarURL = (url) => {
        this.setState({
            url: url,
            estadoEnEditado: 'start',
        })
    }

    miEventoPressEditar = () => {

        this.setState({
            estadoEnEditado: 'loading',
        })

        const db = firebase.firestore();

        const {
            key: photoId,
            title,
            url,
        } = this.state;

        db
        .collection('photos')
        .doc(photoId)
        .update({
            title: title,
            url: url,
        })
        .then(() => {
            this.setState({
                title: '',
                url: '',
                estadoEnEditado: 'saved',
            })
        })
        .catch((error) => {
            console.log("error: ", error);
            this.setState({
                estadoEnEditado: 'error',
            })
        })
    }

    render() {

        const { 
            title,
            url,
            estadoEnEditado,
        } = this.state

        return(
            <Editar
                title={title}
                miEventoCambiarTitulo={this.miEventoCambiarTitulo}
                url={url}
                miEventoCambiarURL={this.miEventoCambiarURL}
                miEventoPressEditar={this.miEventoPressEditar}
                estadoEnEditado={estadoEnEditado}
            />
        )

    }

}

export default EditarContainer;