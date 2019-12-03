import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
} from 'react-native';

const Editar = (props) => {
    
    const {
        title,
        miEventoCambiarTitulo,
        url,
        miEventoCambiarURL,
        miEventoPressEditar,
        estadoEnEditado,
    } = props
    return (
        <View>
            <View>
                <Text>TÍTULO</Text>
                <TextInput
                    value={title}
                    onChangeText={miEventoCambiarTitulo}
                    editable={ estadoEnEditado === 'loading' ? false : true }
                />
            </View>
            <View>
                <Text>Dirección URL de Imagen</Text>
                <TextInput
                    value={url}
                    onChangeText={miEventoCambiarURL}
                    editable={ estadoEnEditado === 'loading' ? false : true }
                />
            </View>
            <View>
                <Button
                    title={'Guardar'}
                    onPress={miEventoPressEditar}
                    disabled={ estadoEnEditado === 'loading' ? true : false }
                />
            </View>
        </View>
    )
};

export default Editar;