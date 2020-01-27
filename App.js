
import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet , Button} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state ={ 
       TextInputNo1: '',
       TextInputNo2: '',
       sum: ''
    };
  }
  /*
  claculateSum  = () => {

    const { TextInputNo1 , TextInputNo2 } = this.state;

    this.setState({
      sum: Number(TextInputNo1) + Number(TextInputNo2)
    });
  }

  CheckTextInput = () => {

    if( this.state.TextInputNo1 != ''){
      if( this.state.TextInputNo2 != ''){
        alert('Success')
      }else{
        alert('Please Enter No2');
      }
    }else{
      alert('Please Enter No1');
    }
  };
  */
  render() {
      return(
        <View style={styles.MainContainer}>
        <TextInput
          keyboardType="numeric"
          placeholder="Enter No1"
          //onChangeText={ TextInputNo1 => this.setState({ TextInputNo1 })}
          onChangeText={(text) => this.setState({TextInputNo1:parseInt(text)})}
          underlineColorAndroid="transparent"
          style={styles.TextInput}
        />
        <TextInput
           keyboardType="numeric"
          placeholder="Enter No2"
          //onChangeText={TextInputNo2 => this.setState({ TextInputNo2 })}
          onChangeText={(text) => this.setState({TextInputNo2:parseInt(text)})}
          underlineColorAndroid="transparent"
          style={styles.TextInput}
        />
        
        <View style={{ marginTop: 15 }}>
          <Button
            title="Sum"
            //onPress={this.CheckTextInput }
            color="#606070"
            onPress={() => {
              this.setState({sum : parseInt(this.state.TextInputNo1) + parseInt(this.state.TextInputNo2) });
             }}
          />
          <Text style={{ color: 'blue'}}>{this.state.sum }</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 35,
  },
  TextInput: {
    width: '100%',
    height: 40,
    paddingLeft: 5,
    borderWidth: 1,
    marginTop: 15,
    borderColor: '#606070',
  },
});


