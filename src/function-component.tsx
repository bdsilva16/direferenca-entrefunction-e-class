import { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";


export default function FunctionComponent() {

    const [contador, setContador] = useState(0)
    

    const increment = () => {
        setContador(contador + 1);
    };

    const reset = () => {
        setContador(0)

    }

    return (
        <View>
            <Text style={{justifyContent:'center',fontSize:80}}>{contador} </Text>

            <Button title="Reset" onPress={reset}></Button>
            <Button title="clique" onPress={increment} ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    },

    letraMaior: {
        fontSize: 10
    }

})