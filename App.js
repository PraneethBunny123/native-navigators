import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from './screens/WelcomeScreen'

const Drawer = createDrawerNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="welcome" component={WelcomeScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

