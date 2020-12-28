import { StyleSheet,Dimensions } from 'react-native';

const styles = StyleSheet.create({
    post:{
        width:'100%',
        height:Dimensions.get('window').height - 48
    },
    video:{
        position: 'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0
    },
    bottomContainer:{
        padding:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end'
    },
    songImage:{
        height:50,
        width:50,
        borderRadius:25,
        borderWidth:8,
        borderColor:'#4c4c4c'
    },
    uiContainer:{
        height: '100%',
        justifyContent: 'flex-end'
    },
    post__songRow:{
        flexDirection:'row',
        alignItems:'center'
    },
    handle:{
        fontSize:18,
        fontWeight:'700',
        color:'#fff',
        marginBottom:10
    },
    description:{
        color:'#ddd',
        fontWeight:'300',
        fontSize:15,
        marginBottom:10
    },
    songName:{
        color:'#fff',
        fontSize:14,
        fontWeight:'300',
        marginLeft:5
    },

    post__right:{
        alignSelf:'flex-end',
        height:250,
        justifyContent:'space-between',
        alignItems:'center',
        marginRight:8
    },
    profilePicture:{
        height:50,
        width:50,
        borderRadius:25,
        borderWidth:2,
        borderColor:'#fff',
        marginBottom:8
    },
    statsLabel:{
        color:'#fff',
        fontSize:16,
        fontWeight:'600',
        marginTop:2
    },
    iconContainer:{
        alignItems:'center',
    }
})

export default styles;