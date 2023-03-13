import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Library from '../components/Library';
import Search from '../components/Search';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SCREEN_NAME } from '../types';

const Tab = createBottomTabNavigator();

export const NavigationBar = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{
                    tabBarLabel: SCREEN_NAME.HOME,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
                name={SCREEN_NAME.HOME}
                component={Home}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: SCREEN_NAME.Search,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="magnify" color={color} size={size} />
                    ),
                }}
                name={SCREEN_NAME.Search}
                component={Search}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: SCREEN_NAME.Library,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="library" color={color} size={size} />
                    ),
                }}
                name={SCREEN_NAME.Library}
                component={Library}
            />
        </Tab.Navigator>
    );
};
