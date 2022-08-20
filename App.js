// Importing React Modules
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

// Importing App Container Modules
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

// Importing Screens from the App
import Home from './screens/Home';
import Popular from './screens/Popular';
import Recommendation from './screens/Recommendation';

// Creating a Top Tab Navigator for the App
const TabNavigator = createMaterialTopTabNavigator({
    RecommendatedArticles: {
        screen: Recommendation,
        navigationOptions: {
            tabBarLabel: 'Recommended Articles',
            tabBarOptions: {
                tabStyle: {
                    backgroundColor: '#fff'
                },
                labelStyle: {
                    color: '#000'
                },
                indicatorStyle: {
                    backgroundColor: '#000'
                }
            }
        }
    },

    PopularArticles: {
        screen: Popular,
        navigationOptions: {
            tabBarLabel: 'Popular Articles',
            tabBarOptions: {
                tabStyle: {
                    backgroundColor: '#fff'
                },
                labelStyle: {
                    color: '#000'
                },
                indicatorStyle: {
                    backgroundColor: '#000'
                }
            }
        }
    }
});

// Creating a Stack Navigator for the App
const StackNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false
        }
    },

    TabNavigator: {
        screen: TabNavigator,
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#fff',
            headerTitle: 'Recommendated and Popular Articles',
            headerStyle: {
                backgroundColor: '#d500f9'
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#fff',
                fontSize: RFValue(18)
            }
        }
    }
},{
    initialRouteName: 'Home'
});

// Creating an App Container for the App
const AppContainer = createAppContainer(StackNavigator);

// Creating a function for the App
export default function App() {
    return (
        <AppContainer />
    );
}