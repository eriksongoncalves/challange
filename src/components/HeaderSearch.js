import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as generalActions from '../store/actions/general';

const HeaderSearch = props => (
    <TouchableOpacity
        onPress={() => props.setModalVisible(true)}
    >
        <Icon
            name="ios-search"
            size={24}
            style={{paddingRight: 20}}
        />
    </TouchableOpacity>
)

const mapDispatchToProps = dispatch => bindActionCreators(generalActions, dispatch);

export default connect(null,mapDispatchToProps)(HeaderSearch);