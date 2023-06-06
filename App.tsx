import { StyleSheet, Text, View } from 'react-native';
import ClassComponent from './src/class-component';
import FunctionComponent from './src/function-component';


const mensagem = "Function Component"

export default function App() {
  return (
    <View style={styles.container}>
      <ClassComponent mensagem='Class Component'/>
      <FunctionComponent textoProps={mensagem} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});