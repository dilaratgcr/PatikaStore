import { StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({
container:{
    flex: 1,
    backgroundColor:'#eceff1',
    margin:10,
    padding:10,
    width:Dimensions.get('window').width/2,
    //height:Dimensions.get('window').height/2,
},
image:{
    width:Dimensions.get('window').width/2.5,
    height:Dimensions.get('window').height/4,
    resizeMode:'contain',
    borderRadius:10,
},
title:{
    fontSize:20,
    fontWeight:'bold',
    color:'black'
},
inStock:{
fontSize:20,
fontWeight:'bold',
color:'red'
}


}
)