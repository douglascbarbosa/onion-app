import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const MainNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Home: HomeScreen,
    Registration: RegistrationScreen,
    SignUp: SignUpScreen
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'Onion'
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;