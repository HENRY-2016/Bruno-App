

import React from 'react';
import { Text,TouchableOpacity,ScrollView,Image, View} from 'react-native';
import styles from "../utilities/stylesheet";
import { smallCard } from '../utilities/Functions';
import { bachelorsUrl, diplomaUrl, mastersUrl } from '../utilities/APIs';
import PaperIcon from "../imgs/paper.png"

export default class Programmes extends React.Component {
    
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
                    <Image source={PaperIcon} style={styles.homeImage} />
                    <View style={{height:20}} ></View>
                    <Text style={[styles.successTexT,styles.aboutText,styles.boldTexT]} >Search For A Past Paper</Text>
                    <View style={{height:20}} ></View>
                </View>

                <View style={{height:20}} ></View>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('DocViewer',{urlLink:mastersUrl})}>
                    {smallCard('Masters in Information Technology')}
                </TouchableOpacity>

                <View style={{height:10}} ></View>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('DocViewer',{urlLink:bachelorsUrl})}>
                    {smallCard('Bachelor of Information Technology')}
                </TouchableOpacity>
                
                <View style={{height:10}} ></View>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('DocViewer',{urlLink:diplomaUrl})}>
                    {smallCard('Diploma in Information Technology')}
                </TouchableOpacity>
                <View style={{height:20}} ></View>
            </ScrollView>
        </View>
    );
}
}
