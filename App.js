import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import { COLORS } from './src/utilities/colors';
import styles from './src/utilities/stylesheet';
import HomeScreen from "./src/components/Home";
import DocViewerScreen from './src/components/DocViewer'
import ProgrammesScreen from './src/components/Programmes'

const Stack = createNativeStackNavigator();

export default function App() {

return (
		<>
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={({route, navigation}) =>({
					headerStyle: {backgroundColor:COLORS.primaryColor},
					headerBackTitleVisible: false,
					headerTintColor:COLORS.whiteColor,
					headerTitleAlign:'left', 
					animation: 'slide_from_right',
				})}
			>
				<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home'}}/>
				<Stack.Screen name="Programmes" component={ProgrammesScreen} options={{ title: 'Programmes'}}/>
				<Stack.Screen name="DocViewer" component={DocViewerScreen} options={{ title: 'View Document'}}/>

			</Stack.Navigator>
		</NavigationContainer>
	</>
);
}

// eas build -p android --profile preview
// eas build --platform android