import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import HomeScreen from './src/screens/HomeScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';


const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Registration: RegistrationScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Onion'
    }
  }
);

const App = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

export default App;