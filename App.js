import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider as OnionProvider } from './src/context/OnionContex';

import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import HomeScreen from './src/screens/HomeScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SettingsScreen from './src/screens/SettingsScreen';

import EntriesScreen from './src/screens/EntriesScreen';
import ShowEntryScreen from './src/screens/ShowEntryScreen';
import CreateEntryScreen from './src/screens/CreateEntryScreen';

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

const EntriesStack = createStackNavigator(
  {
    EntryList: EntriesScreen,
    CreateEntry: CreateEntryScreen,
    Registration: RegistrationScreen,
    ShowEntry: ShowEntryScreen
  },
  {
    initialRouteName: 'EntryList',
    defaultNavigationOptions: {
      title: 'Onion'
    }
  }
)

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: { title: 'Dashboard' }
    }
  }
)

const SettingsStack = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
      navigationOptions: { title: 'Settings' }
    }
  }
)


const AppStack = createBottomTabNavigator(
  {
    // Home: HomeStack,
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: "Dashboard",
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="bar-chart" size={20} color={tintColor} />
        }
      }
    },
    Entries: {
      screen: EntriesStack,
      navigationOptions: {
        tabBarLabel: "Entries",
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="list" size={20} color={tintColor} />
        }
      }

    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="cogs" size={20} color={tintColor} />
        }
      }
    }
  },
  // {
  //   navigationOptions: ({ navigation }) => ({
  //     tabBarIcon: ({ focused, horizontal, tintColor }) => {
  //       const { routeName } = navigation.state;
  //       // let IconComponent = Ionicons;
  //       let iconName = 'comments';
  //       if (routeName === 'Home') {
  //         iconName = 'home';
  //         // Sometimes we want to add badges to some icons.
  //         // You can check the implementation below.
  //         // IconComponent = HomeIconWithBadge;
  //       } else if (routeName === 'Settings') {
  //         iconName = 'comments';
  //       }

  //       // You can return any component that you like here!
  //       return <Icon name={iconName} size={25} color={tintColor} />
  //     },
  //   }),
  //   tabBarOptions: {
  //     activeTintColor: 'tomato',
  //     inactiveTintColor: 'gray',
  //   },
  // }  
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

export default () => {
  return <OnionProvider>
    <App />
  </OnionProvider>
};