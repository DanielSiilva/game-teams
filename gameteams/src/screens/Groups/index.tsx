import { Text, View, StyleSheet } from "react-native";


export  function Groups() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Groups</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  }
})