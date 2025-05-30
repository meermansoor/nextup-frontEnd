import { View, Image, StyleSheet, Text, TouchableOpacity,  } from "react-native";


export default function SignIn_UpScreen({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../images/splogo.jpg")}
          resizeMode="cover"
          style={styles.imageContainer}
        />
        <Text style={styles.textContainer}>What's Next?</Text>
      </View>
      <View style={{justifyContent:'flex-end', paddingBottom:50}}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}
           onPress={()=>{navigation.navigate('sign-in')}}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.signUpButton}
          onPress={()=>{navigation.navigate('sign-up')}}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'white',
  },

  imageContainer: {
    position: "relative",
    bottom: 68,
    borderColor: "#c2272d",
    borderRadius: 20,
  },

  textContainer: {
    position: "relative",
    bottom: 20,
    fontWeight: "200",
    fontSize: 25,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    paddingBottom: 18,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#c2272d",
    borderRadius: 8,
    paddingVertical: 18,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signUpButton: {
    backgroundColor: "white",
    borderWidth:1.4,
    borderColor:'black',
    borderRadius: 10,
    paddingVertical: 18,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  signUpButtonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});
