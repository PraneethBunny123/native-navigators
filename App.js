import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {Ionicons} from '@expo/vector-icons'

import WelcomeScreen from './screens/WelcomeScreen'
import UserScreen from './screens/UserScreen'

const Drawer = createDrawerNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerStyle: {backgroundColor: '#3c0a6b'},
                    headerTintColor: 'white',
                    drawerActiveBackgroundColor: '#f0e1ff',
                    drawerActiveTintColor: '3c06ab',
                    // drawerStyle: {backgroundColor: '#ccc'}
                }}
            >
                <Drawer.Screen 
                    name="welcome" 
                    component={WelcomeScreen} 
                    options={{
                        drawerLabel: 'Welcome Screen',
                        drawerIcon: ({color, size}) => <Ionicons name="home" color={color} size={size} />
                    }}    
                />
                <Drawer.Screen  
                    name="user" 
                    component={UserScreen} 
                    options={{
                        drawerIcon: ({color, size}) => <Ionicons name="person" color={color} size={size} />
                    }}    
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

