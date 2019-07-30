import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class App extends Component {

  state = {
    counter: 0
  }

  increseCounter() {
    this.setState({ counter: this.state.counter + 1 })
  }
  decreseCounter() {
    this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flexDirection: 'row', justifyContent: "space-around", width: 250 }}>
          <TouchableOpacity onPress={() => this.increseCounter()}>
            <Text style={{ fontSize: 20 }}>Increase</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20 }}>{this.state.counter}</Text>
          <TouchableOpacity onPress={() => this.decreseCounter()}>
            <Text style={{ fontSize: 20 }}>Decrease</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}