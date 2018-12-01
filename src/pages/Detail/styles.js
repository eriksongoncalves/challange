import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 20,
        backgroundColor: '#fcdd4b',
        
    },
    headerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bookImage: {
        width: 128, 
        height: 158
    },
    headerTitle: {
        flex: 1,
        marginLeft: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    publisher: {
        color: '#a08a2c',
        marginTop: 5
    },
    priceInfo: {
        marginTop: 10,
        flexDirection: 'row'
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    star: {
        flex: 1,
        marginLeft: 10
    },

    headerActions: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between'

    },
    textPage: {
        width: 128,
        textAlign: 'center',
        color: '#a08a2c',
        alignSelf: 'center'
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnBuy: {
        backgroundColor: '#4a90e2',
        borderRadius: 20,
        paddingHorizontal: 40,
        paddingVertical: 10,
        marginRight: 10
    },
    btnBuyText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    btnLoved:{
        backgroundColor: '#f00',
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 20,
    },
    description:{
        padding: 20,
        
    },
    descriptionText: {
        color: '#666',
        lineHeight: 30
    }
})

export default styles;