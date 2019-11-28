import React from 'react';
import{
    View,
    Text,
    TextInput,
    Button,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const Login = (props) => {

    const {
        miOnChangeDeUSuario,
        miOnChangeDeContraseña,
        miOnPressBoton,
        usuario,
        contraseña,
    } = props;

    return (
        <View style={styles.font}>
            <Image style={styles.img} source={require('../imagenes/logo.png')}/>
            <View style={styles.fondo}>
                <View style = {styles.text}>
                    <TextInput
                        onChangeText={miOnChangeDeUSuario}
                        value={usuario}
                        placeholder="Correo"
                    />
                </View>

                <View style = {styles.text}>
                    <TextInput
                        onChangeText={miOnChangeDeContraseña}
                        value={contraseña}
                        placeholder="Contraseña"
                    />
                </View>
                <View style={styles.row}>
                    <View style = {styles.margin}>
                        <Button
                            title={'Iniciar Sesion'}
                            color='blue'
                            onPress={miOnPressBoton}
                        />
                    </View>
                    <View style={styles.touch}>
                        <TouchableOpacity>
                            <Text>Regístrame!</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Olvidé mi contraseña!</Text>
                        </TouchableOpacity>

                    </View>
                </View>
           </View>
        </View>
    );
};

const styles = StyleSheet.create({
    touch:{
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 16
    },

    row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    
    img:{
        marginTop: -30,      
        marginLeft: 70,       
        marginRight: 10,  
        borderRadius: 15
    },

    font:{

        backgroundColor: 'blue',
        height: '100%',
        justifyContent: 'center',
    },
    
    fondo: {

        marginTop: -20,
        marginLeft: 32,
        marginRight: 30,
        justifyContent: 'center',
        borderRadius: 20,
        padding: 14,
    },

    margin:{
        marginTop: 8,
        flex: 1,
        margin: 2,
        borderRadius: 100
    },
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

export default Login;