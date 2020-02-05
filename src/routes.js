import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Agenda from './pages/Agenda/index';
import CadastroMembro from './pages/CadastroMembro/index';

const Routes = createAppContainer(
    createDrawerNavigator({Agenda, CadastroMembro })
);

export default Routes;
