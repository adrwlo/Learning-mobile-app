import React from "react";
import {Text, View, StyleSheet, TouchableOpacity } from "react-native";




const Topics = ({navigation}) => {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.viewStyle} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.textStyle}>Temat 1</Text>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.viewStyle} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.textStyle}>Temat 2</Text>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.viewStyle} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.textStyle}>Temat 3</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.viewStyle} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.textStyle}>Temat 4</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.viewStyle} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.textStyle}>Temat 5</Text>
      </TouchableOpacity>

      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
  },
  viewStyle: {
    backgroundColor: '#1c4587',
    height: 'auto',
    width: '80%',
    borderRadius: 15,
    marginTop: 25,
},
textStyle: {
    textAlign: 'left',
    marginLeft: 20,
    color: 'white',
    padding: 12,
    fontSize: 35,   
},
});

export default Topics;