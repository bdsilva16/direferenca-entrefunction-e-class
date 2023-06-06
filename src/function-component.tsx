import { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";


export default function FunctionComponent(props) {

    const [contador, setContador] = useState(0)


    const increment = () => {
        setContador(contador + 1);
    };

    const reset = () => {
        setContador(0)

    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>

                {props.textoProps}
            </Text>

            <Text style={styles.letraMaior}>{contador} </Text>

            <TouchableOpacity style={styles.button} onPress={reset}>
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={increment}>
                <Text style={styles.buttonText}>Clique</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 100

    },

    letraMaior: {
        fontSize: 80,
        textAlign: "center"
    },

    text: {
        fontSize: 20,
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
});

