import { StyleSheet, Text, View } from 'react-native';
import ClassComponent from './src/class-component';
import FunctionComponent from './src/function-component';




export default function App() {
  return (
    <View style={styles.container}>
      <ClassComponent />
      <FunctionComponent />
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