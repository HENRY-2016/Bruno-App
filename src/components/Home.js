

import React from 'react';
import { Text,TouchableOpacity,ScrollView, View} from 'react-native';
import styles from "../utilities/stylesheet";
import { smallCard } from '../utilities/Functions';
export default class Home extends React.Component {
    
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
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('NoticeBoard')}>
                    {smallCard('Notice Board')}
                </TouchableOpacity>

                <View style={{height:10}} ></View>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Programmes')}>
                    {smallCard('Revision Papers')}
                </TouchableOpacity>
                <View style={{height:20}} ></View>
            </ScrollView>
        </View>
    );
}
}
