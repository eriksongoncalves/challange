import React from 'react';
import {createStackNavigator, createDrawerNavigator, createAppContainer} from 'react-navigation';
import Home from './pages/Home';
import Books from './pages/Books';
import Detail from './pages/Detail';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as generalActions from './store/actions/general';

const defaultOptions = {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerTitle: 'Design Books',
        headerTintColor: '#000',
        headerStyle: {
            backgroundColor: '#fcdd4b',
            borderBottomWidth: 0
        }
    }
}

const drawerNavigator = createDrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: () => <Icon name='ios-home' size={30} color="#000" />
        }
    },
    Books: {
        screen: Books,
        navigationOptions: {
            drawerLabel: 'Books',
            drawerIcon: () => <Icon name='ios-book' size={30} color="#000" />
        }
    }
});

const stackNavigator = createStackNavigator({
    Home: {
        screen: Home,
    },
    Books: {
        screen: Books
    },
    Detail: {
        screen: Detail,
    }
},
defaultOptions
);

const mapDispatchToProps = dispatch => bindActionCreators(generalActions, dispatch);

export default connect(null, mapDispatchToProps)(createAppContainer(stackNavigator))

//export default 