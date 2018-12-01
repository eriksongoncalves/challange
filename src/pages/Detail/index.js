import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderSearch from '../../components/HeaderSearch';
import ModalSearch from '../../components/ModalSearch';

export default class Detail extends Component {

    static navigationOptions = ({navigation}) => ({
        headerLeft: (
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Icon
                    name="ios-arrow-back"
                    size={24}
                    style={{paddingLeft: 20}}
                />
            </TouchableOpacity>
        ),
        headerRight: <HeaderSearch />
    })
    
    render() {
        const params = this.props.navigation.getParam('book', {});
        const book = params.volumeInfo;
        const {saleInfo} = params;
        const simbol = saleInfo.country == 'BR' && saleInfo.isEbook ? 'R$ ' : '$ ';

        return (
            <ScrollView style={styles.container} bounces={false}>
                <View style={styles.header}>
                    <View style={styles.headerInfo}>
                        <Image 
                            style={styles.bookImage} 
                            source={{uri: book.imageLinks.thumbnail}} />

                        <View style={styles.headerTitle}>
                            <Text style={styles.title}>{book.title}</Text>
                            <Text style={styles.publisher}>
                                by {book.publisher}
                            </Text>
                            <View style={styles.priceInfo}>
                                {saleInfo.isEbook && 
                                <Text style={styles.price}>
                                    {saleInfo.listPrice.amount > 0 ? simbol + saleInfo.listPrice.amount : ''}
                                </Text>
                                }
                                
                                <Text style={styles.star}>star</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.headerActions}>
                        <Text style={styles.textPage}>{book.pageCount} pages</Text>
                        <View style={styles.buttons}>
                            <TouchableOpacity 
                                style={styles.btnBuy}
                                onPress={() => {}}>
                                <Text style={styles.btnBuyText}>BUY</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  
                                style={styles.btnLoved}
                                onPress={() => {}}>
                                <Icon name='ios-heart' size={20} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.description}>
                    <Text style={styles.descriptionText}>
                        {book.description}
                    </Text> 
                </View>
                <ModalSearch navigation={this.props.navigation} />
            </ScrollView>
        );
    }
}