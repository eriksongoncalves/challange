import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import {StackActions, NavigationActions} from 'react-navigation';
import Icon from  'react-native-vector-icons/Ionicons';

const navigateToBooks = navigation => {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'Books' })
        ]
    });
    navigation.dispatch(resetAction);
}

const Home = props => (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Icon name='ios-book' size={80} color="#000" />
            <Text style={styles.headerText} >Design Books</Text>
        </View>
        <View style={styles.content}>
            <Text style={styles.welcome}>Welcome</Text>
            <Text style={styles.description}>Each book a different journey</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigateToBooks(props.navigation)}>
            <Text style={styles.btnText}>CHOOSE YOUR</Text>
        </TouchableOpacity>

        
    </SafeAreaView>
);

Home.navigationOptions = {
    header: null
}


export default Home;