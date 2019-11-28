import React from 'react';

import {
    View,
    Text,
    Button,
} from 'react-native';

const Animales = (props) => {

    const { 
        cambiarInterfaz, 
    } = props;

    return(
        <View>
            <Text>
                Animales!
            </Text>
            <Button
                title='<- Regresar'
                onPress={
                    () => {
                    cambiarInterfaz('inicio');
                    }
                }
            />
        </View>
    );  
};

export default Animales;