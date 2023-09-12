import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      padding:10,
    },
    text:{
        fontSize:22,
        alignSelf:"center",
        
    },
    innerContainer:{
        borderWidth:1,
        marginTop:10,
        borderColor:"gray",
        paddingVertical:10,
        borderRadius:8,
        marginBottom:10,
    },
    title:{
        fontSize:18,

    },
    statistics:{
        borderWidth:1,
        marginTop:10,
        borderColor:"gray",
        paddingVertical:10,
        borderRadius:8
    },
    Max:{
        width:30,
        height:30,
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:10,
    }
});

export default styles;