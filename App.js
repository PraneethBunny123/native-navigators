// import { createBottomTabNavigator } from "@react-navigation/BottomTab";
// import { NavigationContainer } from "@react-navigation/native";
// import {Ionicons} from '@expo/vector-icons'

// import WelcomeScreen from './screens/WelcomeScreen'
// import UserScreen from './screens/UserScreen'

// const BottomTab = createBottomTabNavigator()

// export default function App() {
//     return (
//         <NavigationContainer>
//             <BottomTab.Navigator
//                 screenOptions={{
//                     headerStyle: {backgroundColor: '#3c0a6b'},
//                     headerTintColor: 'white',
//                     BottomTabActiveBackgroundColor: '#f0e1ff',
//                     BottomTabActiveTintColor: '3c06ab',
//                     // BottomTabStyle: {backgroundColor: '#ccc'}
//                 }}
//             >
//                 <BottomTab.Screen 
//                     name="welcome" 
//                     component={WelcomeScreen} 
//                     options={{
//                         BottomTabLabel: 'Welcome Screen',
//                         BottomTabIcon: ({color, size}) => <Ionicons name="home" color={color} size={size} />
//                     }}    
//                 />
//                 <BottomTab.Screen  
//                     name="user" 
//                     component={UserScreen} 
//                     options={{
//                         BottomTabIcon: ({color, size}) => <Ionicons name="person" color={color} size={size} />
//                     }}    
//                 />
//             </BottomTab.Navigator>
//         </NavigationContainer>
//     );
// }


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {Ionicons} from '@expo/vector-icons'

import WelcomeScreen from './screens/WelcomeScreen'
import UserScreen from './screens/UserScreen'

const BottomTab = createBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                screenOptions={{
                    headerStyle: {backgroundColor: '#3c0a6b'},
                    headerTintColor: 'white',
                    tabBarActiveTintColor: '#3c0a6b'
                }}
            >
                <BottomTab.Screen 
                    name="welcome" 
                    component={WelcomeScreen} 
                    options={{
                        tabBarIcon: ({color, size}) => <Ionicons name="home" color={color} size={size} />
                    }}
                />
                <BottomTab.Screen  
                    name="user" 
                    component={UserScreen} 
                    options={{
                        tabBarIcon: ({color, size}) => <Ionicons name="person" color={color} size={size} />
//                     }}    
                    }}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}

