import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      capture: {
        marginHorizontal:60,
        flex: 0,
        backgroundColor: '#fff',
        height:90,
        width:90,
        borderRadius: 45,
        justifyContent:'center',
        alignItems: 'center',
        margin: 20,
      },
    });

export default styles