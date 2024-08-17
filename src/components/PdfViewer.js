    import React from'react';
    import { View, StyleSheet, Dimensions,ActivityIndicator } from'react-native';
    import { WebView } from'react-native-webview';

const {width} = Dimensions.get("window");
const height =width * 2; 

const PdfViewer = ({urlLink}) => {
    const htmlContent = `
    <!DOCTYPE html>
    <html>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body { margin: 0; padding: 0; }
            embed { width: 100%; height: 100vh; }
        </style>
        </head>
        <body>
        <iframe
            src=${urlLink}           
            width=${width}
            height=${height}
        ></iframe>
        </body>
    </html>
    `;

    return (
            <WebView originWhitelist={['*']}
                source={{html:htmlContent }}
                style={{height,width }}
                javaScriptEnabled={true}scalesPageToFit={true}renderLoading={() => (
                <View style={styles.loaderContainer}><ActivityIndicator size="large" color="#0000ff" /></View>
                )}
                startInLoadingState={true}
                onError={(syntheticEvent) => {
                const { nativeEvent } = syntheticEvent;
                console.warn('WebView error: ', nativeEvent);
                }}
            />
    );
};

const styles = StyleSheet.create({
    loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    });

export default PdfViewer;
