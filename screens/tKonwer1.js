import React, { useState, useEffect } from "react";
import {ImageBackground, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { COLORS, SIZES } from '/Users/adrianwlodarski/AwesomeProject/assets/constants/theme.js';


import z1o0 from "../assets/konwer1/z1o0.png";
import z1o1 from "../assets/konwer1/z1o1.png";
import z1o2 from "../assets/konwer1/z1o2.png";
import z1o3 from "../assets/konwer1/z1o3.png";
import z1o4 from "../assets/konwer1/z1o4.png";
import z1o5 from "../assets/konwer1/z1o5.png";
import z1o6 from "../assets/konwer1/z1o6.png";
import z1o7 from "../assets/konwer1/z1o7.png";
import z1o8 from "../assets/konwer1/z1o8.png";
import z1o9 from "../assets/konwer1/z1o9.png";
import z1o10 from "../assets/konwer1/z1o10.png";
import z1o11 from "../assets/konwer1/z1o11.png";
import z1o12 from "../assets/konwer1/z1o12.png";
import z1o13 from "../assets/konwer1/z1o13.png";



const TKonwer1 = () => {

    const arr = [z1o0, z1o1, z1o2, z1o3, z1o4, z1o5, z1o6, z1o7, z1o8, z1o9, z1o10, z1o11, z1o12, z1o13 ];    
    const [image, setImage] = useState(arr[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
        setImage(arr[index]);
      });


    const next = () => {
        setIndex((index + 1) % arr.length);
    }

    const prev = () => {
        if (index > 0) setIndex(index - 1);   
    }


    return (
        <View style={styles.container}>
        
            <ImageBackground style={styles.imgContainer} source={image}>

                <TouchableOpacity 
                    style={styles.buttonStyle} 
                    onPress={
                        () => {
                            prev();
                        }
                    }>
                    <Text style={styles.buttonTextStyle}>Cofnij</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.buttonStyle} 
                    onPress={
                        () => {
                            next();
                        }
                    }>
                    <Text style={styles.buttonTextStyle}>Dalej</Text>
                </TouchableOpacity>


            </ImageBackground>

        </View>
        
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#1c4587',
    },
    imgContainer: {
        flex: 1,
        width: '96%',
        height: 'auto',
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 20,

    },
    buttonStyle: {
        backgroundColor: '#5a78a8',
        width: '25%',
        marginBottom: 30,
        margin: 5,
        marginRight: 35,
    },
    buttonTextStyle: {
        color: COLORS.white,
        padding: 5,
        fontSize: 20,
        textAlign: 'center',
    }
})



export default TKonwer1;