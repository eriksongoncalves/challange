import React, {Component} from 'react';
import { View, FlatList, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import List from './components/List';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderSearch from '../../components/HeaderSearch';
import ModalSearch from '../../components/ModalSearch';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ActionsCreators from '../../store/actions/books';

class Books extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: (
                <TouchableOpacity
                    onPress={() => console.tron.log('Drawer')}
                >
                    <Icon
                        name="ios-menu"
                        size={24}
                        style={{paddingLeft: 20}}
                    />
                </TouchableOpacity>
            ),
            headerRight: <HeaderSearch />
        }
    }

    loadBooks = async (refreshing = false, reached = false) => {
        this.props.booksRequest(refreshing, reached);
    }

    componentDidMount(){
        this.loadBooks();
    }

    render() {
        const {books} = this.props;

        return (
            <View style={styles.container}>
                {books.loader 
                    ? <ActivityIndicator style={styles.loader} size="large" />
                    : <FlatList
                            data={books.items}
                            renderItem={({item}) =>  <List book={item} navigation={this.props.navigation} />}
                            keyExtractor={item => String(item.id)}
                            numColumns={3}
                            columnWrapperStyle={styles.columnContainer}
                            refreshing={books.refreshing}
                            onRefresh={() => this.loadBooks(true)}
                            onEndReached={() => this.loadBooks(false, true)}
                            onEndReachedThreshold={0.1}
                            ListFooterComponent={
                                <View>
                                    <ActivityIndicator />
                                </View>
                            }
                        />
                }
                <ModalSearch navigation={this.props.navigation} />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    books : state.books,
    general: state.general
});

const mapDispatchToProps = dispatch => bindActionCreators(ActionsCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Books);