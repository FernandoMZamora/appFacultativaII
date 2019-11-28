import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Abecedario from './pant-abecedario';
import Animales from './pant-animales';
import Numeros from './pant-numeros';

const menuDrawer = createDrawerNavigator({

    Abecedario: {
        screen: Abecedario,
        navigationOptions: {
            drawerLabel: 'Abecedario!',
        }, 
    },

    Animales: {
        screen: Animales,
        navigationOptions: {
            drawerLabel: 'Animales!',
        }, 
    },

    Numeros: {
        screen: Numeros,
        navigationOptions: {
            drawerLabel: 'Números!',
        }, 
    },
})

export default createAppContainer(menuDrawer);