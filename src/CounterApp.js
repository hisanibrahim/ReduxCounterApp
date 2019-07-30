import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'


class CounterApp extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={{ flexDirection: 'row', justifyContent: "space-around", width: 250 }}>
                    <TouchableOpacity onPress={() => this.props.increseCounter()}>
                        <Text style={{ fontSize: 20 }}>Increase</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
                    <TouchableOpacity onPress={() => this.props.decreseCounter()}>
                        <Text style={{ fontSize: 20 }}>Decrease</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreseCounter: () => dispatch({ type: 'DECREASE_COUNTER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);