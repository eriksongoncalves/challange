import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const List = ({book, navigation}) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Detail', {book})}>
            <Image 
                style={styles.thumbBook} 
                source={{uri: book.volumeInfo.imageLinks.thumbnail}} 
            />
        </TouchableOpacity>            
    </View>
);

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        flexBasis: 0,
        maxWidth: (screenWidth - 60) / 3
    },
    thumbBook: {
        width: 118, 
        height: 158,
    },
    
})

export default List;