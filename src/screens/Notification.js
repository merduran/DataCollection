import React from 'react';
import {StyleSheet, View, Text, Dimensions, Button} from 'react-native';

class Notification extends React.Component {

  updateData = () => {
    console.log("Annen")
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Omac</Text>
        <Text style={styles.content}>What are you here for?</Text>
        <View style={styles.button_container}>
          <Button style={styles.sports_button} title="Basketball" onPress={this.updateData}></Button>
          <Button style={styles.sports_button} title="Basketball" onPress={this.updateData}></Button>
          <Button style={styles.sports_button} title="Basketball" onPress={this.updateData}></Button>
          <Button style={styles.sports_button} title="Basketball" onPress={this.updateData}></Button>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({

  container: {
    backgroundColor: '#ff505c',
    padding: 20,
    margin: 20

    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },

  button_container: {
    flex: 1,
    flexDirection: 'row',
  },

  title: {
    fontSize: 18,
    textAlign: 'center',
  },
  content: {
    textAlign: 'center',
    marginTop: 10,
  },
  sports_button: {
    width: 30,
    height: 30
  }
});

export default Notification;
