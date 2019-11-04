import React from 'react';

import {
    View,
    Text,
    Button,
} from 'react-native';

const Abecedario = (props) => {

    const { 
        cambiarInterfaz, 
    } = props;

    return(
        <View>
            <Text>
                Abecedario!
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

export default Abecedario;