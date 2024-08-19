

import React from 'react';
import { Text,TouchableOpacity, ScrollView,ActivityIndicator, View} from 'react-native';
import styles from "../utilities/stylesheet";
import { WebView } from 'react-native-webview';
import * as FileSystem from 'expo-file-system';
import { Asset } from'expo-asset';
import { COLORS } from '../utilities/colors';




export default class ViewPaper extends React.Component {
    
constructor(props){
    
    super(props);
    this.state = {
        
        
    }    
}
UNSAFE_componentWillMount () {
// this.loadPdf();
}

componentDidMount(){}



render() {
    return (
        <View style={styles.mainView}>
            <View style={{height:20}} ></View>
            <ScrollView showsVerticalScrollIndicator={false}>
                
            </ScrollView>
        </View>
    );
}
}
