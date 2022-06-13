import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const icon1 = require('/Users/adrianwlodarski/AwesomeProject/assets/theme/icon1.png');
const icon2 = require('/Users/adrianwlodarski/AwesomeProject/assets/theme/icon2.png');
const icon3 = require('/Users/adrianwlodarski/AwesomeProject/assets/theme/icon3.png');

const Information = () => {
  alert("Dalej pracujemy nad tym");
}
 

const Home1 = ({navigation}) => {
  return (
    <View style={styles.container}>

        <TouchableOpacity style={styles.viewStyle} onPress={Information}>
          <Text style={styles.textStyle}>Zagadnienia teoretyczne</Text>
          <Image style={styles.imageStyle} source={icon1}/>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.viewStyle} onPress={() => navigation.navigate("Quiz nr 1")}>
          <Text style={styles.textStyle}>Quizy</Text>
          <Image style={styles.imageStyle} source={icon2}/>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.viewStyle} onPress={() => navigation.navigate("Tryb konwersacyjny nr 1")}>
          <Text style={styles.textStyle}>Zadania z rozwiązaniami</Text>
          <Image style={styles.imageStyle} source={icon3}/>
        </TouchableOpacity> 

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewStyle: {
      backgroundColor: '#1c4587',
      height: 90,
      width: 300,
      borderRadius: 20,
      margin: 15,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
  },
  textStyle: {
      width: 200,
      height: 'auto',
      color: 'white',
      paddingLeft: 20,
      fontSize: 30,   
  },
  imageStyle: {
      width: 60,
      height: 60,
      marginLeft: 20,
      backgroundColor: '#1c4587',
  }
});

export default Home1;