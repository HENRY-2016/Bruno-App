import React, {useState, useEffect} from 'react';
import { Text, View,TextInput,Alert,TouchableOpacity,Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import { Entypo } from '@expo/vector-icons';
import { COLORS } from './src/utilities/colors';
import userIcon from './src/imgs/icon.png';
import styles from './src/utilities/stylesheet';
import HomeScreen from "./src/components/Home";
import NoticeBoardScreen from './src/components/NoticeBoard'
import ProgrammesScreen from './src/components/Programmes'
import ViewPaperScreen from './src/components/ViewPaper'
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
				<Stack.Screen name="Home" component={HomeScreen} options={{ title: ''}}/>

				<Stack.Screen name="NoticeBoard" component={NoticeBoardScreen} options={{ title: 'Notice Board'}}/>
				<Stack.Screen name="Programmes" component={ProgrammesScreen} options={{ title: 'Programmes'}}/>
				<Stack.Screen name="ViewPaper" component={ViewPaperScreen} options={{ title: 'View '}}/>

			</Stack.Navigator>
		</NavigationContainer>
	</>
);
}

// eas build -p android --profile preview
// eas build --platform android