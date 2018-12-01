import React, {Component} from 'react';
import {
  Modal, 
  TextInput, 
  Text, 
  View, 
  Alert, 
  StyleSheet, 
  FlatList,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as generalActions from '../store/actions/general';

class ModalSearch extends Component {

  state = {
    inputSearch : ''
  }

  render() {
    const {modalVisible} = this.props.general;
    return (
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.container}>
            <View style={styles.searchBar}>
              <TextInput 
                onChangeText={text => this.setState({inputSearch:text})}
                value={this.state.inputSearch}
                style={styles.inputText}
                placeholder="Find your book..."
              />
            </View>
            <FlatList
              data={[
                {id:1,title: "asdsadas"},
                {id:2,title: "323asdsadas"}
              ]}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => (
                <View style={styles.row}>
                  <TouchableOpacity
                    onPress={() => this.props.setModalVisible(false)}
                  >
                    <Text style={styles.textRow}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              )}
              style={styles.list}
            />
            <TouchableOpacity
              style={styles.btnClose}
              onPress={() => this.props.setModalVisible(false)}
            >
              <Text style={styles.textClose}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcdd4b',
    paddingVertical: 50,
    paddingHorizontal: 20
  },
  searchBar:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  inputText:{
    backgroundColor: "#fff",
    height: 60,
    flex:1,
    paddingHorizontal: 20
  },
  icon:{
    color: '#000',
    paddingLeft: 20
  },
  list:{
    flex: 1
  },
  row:{
    marginBottom: 20,
  },
  textRow:{
    fontSize: 20,
  },
  btnClose: {
    backgroundColor: '#4a90e2',
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    alignItems: 'center'
  },
  textClose:{
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  }
});


const mapStatetoProps = state => ({
  general: state.general
})

const mapDispatchToProps = dispatch => bindActionCreators(generalActions, dispatch);

export default connect(mapStatetoProps,mapDispatchToProps)(ModalSearch);