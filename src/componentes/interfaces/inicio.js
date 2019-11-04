import React from 'react';

import {
    View,
    Text,
    Button,
    Image,
} from 'react-native';

const Inicio = (props) => {

    const { 
        cambiarInterfaz, 
        campoTexto,
    } = props;

    return(
        <View style={styles.text}>
            <Text>
                Bienvenido {campoTexto} ÜLeng!
            </Text>
            <View>
                <Image source={require('../imagenes/abecedario.png')}></Image>
                <Button
                    title='Abecedario'
                    onPress={
                        () => {
                            cambiarInterfaz('pant-abecedario');
                        }
                    }
                />
                <Image source={require('../imagenes/numeros.png')}></Image>
                <Button
                    title='Numeros'
                    onPress={
                        () => {
                            cambiarInterfaz('pant-numeros');
                        }
                    }
                />
            </View>
            <Button
                title='Salir!'
                onPress={
                    () => {
                    cambiarInterfaz('login');
                    }
                }
            />
        </View>
    );  
};

const styles = StyleSheet.create({
    text:{
        marginTop: 15,
        backgroundColor: 'transparent',
        marginLeft: 10,
        marginRight: 10,
        borderColor: 'purple',
        borderWidth: 1,
        borderRadius: 50,
        fontSize: 30,
        height: 40
    }
})

export default Inicio;