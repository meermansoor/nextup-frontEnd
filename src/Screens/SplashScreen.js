import React, { useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, Image, Button } from "react-native";

export default function SplashScreen({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('signin-up');
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <View style={styles.container}>
        <Image source={require('../images/splogo.jpg')} style={styles.logoImg} resizeMode='contain'/>
      <StatusBar hidden={true} />
      <View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c2272d",  // your red color
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  logoImg:{
    flexDirection:'column',
  }
});
