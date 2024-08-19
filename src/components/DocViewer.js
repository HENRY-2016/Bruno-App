import React from'react';
import { View, Dimensions,ActivityIndicator,Alert, ScrollView } from 'react-native';
import styles from "../utilities/stylesheet";

import { WebView } from'react-native-webview';
import { COLORS } from '../utilities/colors';
import { useRoute } from '@react-navigation/native';

const {width} = Dimensions.get("window");
const height =width * 2; 

// const DocViewer = ({urlLink}) => {
const DocViewer = () => {
    const route =useRoute();
    const {urlLink} = route.params;

    const htmlContent = `
    <!DOCTYPE html>
    <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body { margin: 0; padding: 0;}
        </style>
        </head>
        <body>
        <iframe
            frameborder="0"
            src=${urlLink}           
            width=${width}
            height=${height}
        ></iframe>
        </body>
    </html>
    `;

    return (
            <View style={styles.mainView}>
                <WebView originWhitelist={['*']}
                    source={{html:htmlContent }}
                    style={{height,width }}
                    javaScriptEnabled={true} scalesPageToFit={true} 
                    
                    renderLoading={() => (
                        <View style={styles.loaderContainer}><ActivityIndicator size="large" color={COLORS.primaryColor} /></View>
                    )}
                    startInLoadingState={true}
                    onError={(syntheticEvent) => {
                        const { nativeEvent } = syntheticEvent;
                        console.warn('WebView error: ', nativeEvent);
                        Alert.alert("WebView error",nativeEvent)
                    }}
                /> 
                
            </View>
    );
};



export default DocViewer;
