
import { Text,Image, View, TouchableOpacity,Alert, ScrollView} from 'react-native';
import styles from './stylesheet';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from './colors';



export const convertToCapitalLetters = (text)=>{return text.toUpperCase();}

export const smallCard = (textName)=>

    {
        return(
            <View style={[styles.smallCard,styles.displayCard]} >
                <View style={styles.smallCardContainer}>
                    <View style={styles.smallCardRowView}>
                        <View style={styles.textView}>
                            <Text style={[styles.successTexT,styles.aboutText]} >{textName}</Text>
                        </View>
                        <View style={{position: 'absolute', right: 0,marginRight:20,marginTop:20}}>
                            <AntDesign name="arrowright" size={24} color={COLORS.primaryColor} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }