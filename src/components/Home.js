

import React from 'react';
import { Text, Image,TouchableOpacity,ScrollView, View} from 'react-native';
import styles from "../utilities/stylesheet";
import { smallCard } from '../utilities/Functions';
import UserIcon from "../imgs/user.png";
import { noticeBoardUrl } from '../utilities/APIs';



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
                <View style={[styles.displayCard,styles.homeImageView]}>
                    <Image source={UserIcon} style={styles.homeImage} />
                    <View style={{height:20}} ></View>
                    <Text style={[styles.successTexT,styles.aboutText,styles.boldTexT]} >Student Application</Text>
                    <View style={{height:20}} ></View>

                </View>
                <View style={{height:20}} ></View>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('DocViewer',{urlLink:noticeBoardUrl})}>
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
