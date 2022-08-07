import { StyleSheet, Platform, StatusBar,} from 'react-native';

export  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#212529',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    searchSection: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        height: 50,
        borderRadius:25,
        backgroundColor: '#2a2e32',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    header:{         
        width: '100%',
        alignSelf: 'center',     
        height: 50,  
        backgroundColor: '#2a2e32',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center',
    },
    headerItems:{
        color: '#a1a3a4',
        paddingLeft: 25,
        fontSize: 18,
    },
    Recommendations:{
        width: '100%',
        alignSelf: 'center',    
        height: 250,     
    },
    title:{    
        width: '90%',
        alignSelf: 'center', 
        marginTop: 10, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    titleItems:{
        fontSize: 18,
        color: '#a1a3a4',
    },
    stretch: {
        width: 160,
        height: 185,
        resizeMode: 'stretch',
        borderRadius:20,
        marginBottom:8,
      },
  });