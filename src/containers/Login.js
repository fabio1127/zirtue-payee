import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { dynamicSize, getFontSize } from '../helpers/DynamicSize';

// const headerIcon = require('../assets/images/header.png');

// const { width } = Dimensions.get('window');

class Login extends Component {
  static navigationOptions = () => {
    return {
      title: 'ZirTue',
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: (
        null
      ),
      headerRight: (
        null
      ),
    };
  }

  state = {
    email: '',
    password: '',
  }

  render() {
    const { email, password } = this.state;
    console.log(email, password);
    return (
      <View style={styles.content}>
        <Text>
          This is Login page
        </Text>
      </View>
    );
  }
}

const styles = {
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: dynamicSize(80),
    height: dynamicSize(80),
    resizeMode: 'contain',
  },
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(Login);
