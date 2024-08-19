import { StyleSheet, Dimensions} from 'react-native';
import { COLORS } from "./colors";
import { FONTSIZE } from './fonts';

export default StyleSheet.create(
{
    mainView: {flex:1,backgroundColor:COLORS.appBodyColor,},



    redTexT:{color:COLORS.dangerColor},
    successTexT:{color:COLORS.successColor},
    whiteTexT:{color:COLORS.whiteColor},
    blackTexT:{color:COLORS.blackColor,},
    boldTexT:{fontWeight:'bold'},

    primaryText:{fontSize:FONTSIZE.fontSizeOne},
    

    recordCardTitle:{ marginTop:20,marginLeft:20,fontWeight:'bold'},


    displayCard:
    {
        backgroundColor:COLORS.whiteColor,
        borderRadius:10,
        marginRight:8,marginLeft:8,
        borderColor:COLORS.primaryColor,
        borderWidth:2,
    },

    homeImageView:{
        alignItems:'center',
        marginTop:"8%",
    },
    homeImage:{
        marginTop:20,
    },

    smallCard:{height:70,width:'95%',marginLeft:10,marginRight:10},
    smallCardContainer:{height:50,borderRadius:10,},
    smallCardRowView:{flexDirection:'row',},
    textView:
    {
        marginTop:25,marginLeft:'10%',
        // justifyContent:'center',
        // backgroundColor:COLORS.secondaryColor,

    },
    aboutText:{fontSize:16,},

    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:COLORS.whiteColor,
        },
});