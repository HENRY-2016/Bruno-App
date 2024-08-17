

import React from 'react';
import { Text,TouchableOpacity,ScrollView, View} from 'react-native';
import styles from "../utilities/stylesheet";
import { COLORS } from '../utilities/colors';
import { FONTSIZE } from '../utilities/fonts';
import { convertToCapitalLetters } from '../utilities/Functions';
export default class NoticeBoard extends React.Component {
    
constructor(props){
    
    super(props);
    this.state = {

    }    
}
UNSAFE_componentWillMount () {
    
}

componentDidMount(){}

render() {
    return (
        <View style={styles.mainView}>
            <View style={{height:20}} ></View>
            <ScrollView showsVerticalScrollIndicator={false}>
                
                <View style={{height:20}} ></View>

                    <View style={[styles.recordCard,styles.displayCard]}>
                        <View style={{height:10}} ></View>
                        <Text style={[styles.recordCardTitle,styles.successTexT,styles.primaryText]}>COMMUNICATIONS</Text>
                        <View style={{height:10}} ></View>

                        <Text style={[styles.blackTexT,styles.primaryText,styles.boldTexT,styles.recordButtonsText]}> ⬤ Communication Sample 1</Text>
                        <Text style={[styles.blackTexT,styles.primaryText,styles.boldTexT,styles.recordButtonsText]}> ⬤ Communication Sample 2</Text>
                        <Text style={[styles.blackTexT,styles.primaryText,styles.boldTexT,styles.recordButtonsText]}> ⬤ Communication Sample 3</Text>
                        <Text style={[styles.blackTexT,styles.primaryText,styles.boldTexT,styles.recordButtonsText]}> ⬤ Communication Sample 4</Text>
                        <View style={{height:20}} ></View>
                    </View>
        
                <View style={{height:20}} ></View>
            </ScrollView>
        </View>
    );
}
}
