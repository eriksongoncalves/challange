import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fcdd4b'
        
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    headerText:{
        color: '#000',
        fontWeight: 'bold',
        fontSize: 40,
        marginBottom: 20
    },
    content: {
        flex: 1,
        backgroundColor: '#edd361',
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 30,
        marginBottom: 5,
        opacity: 0.7
    },
    description: {
        fontSize: 18,
        opacity: 0.7
    },
    button: {
        margin: 20,
        backgroundColor: '#4a90e2',
        paddingVertical: 20,
        borderRadius: 10
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        alignSelf: 'center'
        
    }
})

export default styles;