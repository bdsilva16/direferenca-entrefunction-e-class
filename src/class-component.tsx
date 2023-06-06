import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";


interface Props {
    mensagem:string
}

interface State {
    contador: number
}

export default class ClassComponent extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props)
        this.state = { contador: 0 }
    }

    private increment() {
        const calculo = this.state.contador + 1;
        this.setState({ contador: calculo })
    }


    render() {
        return (
            <View>
                <Text style={styles.text2}>
                {this.props.mensagem}
                </Text>
                
                <Text style={styles.text}>{this.state.contador} </Text>
                <TouchableOpacity style={styles.button} onPress={() => { this.increment(); }}>
                    <Text style={styles.buttonText}>Clique</Text>
                </TouchableOpacity>
            </View>
        );
    };

}
const styles = StyleSheet.create({
    
    text: {
        fontSize: 80,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center"
    },
    text2:{
        fontSize: 20,
        marginTop:70,
        fontWeight: 'bold'
    },

    button: {
        backgroundColor: '#f4511e',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
// onPress={() =>{this.increment();}}