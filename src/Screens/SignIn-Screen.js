import { StatusBar } from "expo-status-bar";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useState } from "react";

export default function SignInScreen({ navigation }) {
  const [email, getEmail] = useState("");
  const [password, getPassword] = useState("");

  return (
    <>
      <ImageBackground
        source={require("../images/todo-list.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        {/* Black overlay */}
        <View style={styles.overlay} />

        {/* Top Text */}
        <View style={styles.headerText}>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.subtitle}>Please sign in to continue</Text>
        </View>

        {/* Card */}
        <View style={styles.card}>
          <Text
            style={[
              styles.heading,
              { marginBottom: 10, fontSize: 35, color: "black" },
            ]}
          >
            Sign In
          </Text>
          <Text style={[styles.heading]}>Welcome Back!</Text>

          <View style={{}}>
          {/* <FontAwesome5 name="user-circle" size={30} color="#c2272d"  /> */}

          <TextInput
            style={styles.textFields}
            value={email}
            onChangeText={getEmail}
            placeholder="Enter Your Email"
            placeholderTextColor="#999"
            autoCapitalize="none"
            keyboardType="email-address"
          />
          </View>
          <TextInput
            style={styles.textFields}
            value={password}
            onChangeText={getPassword}
            placeholder="Enter Your Password"
            placeholderTextColor="#999"
            secureTextEntry
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("forgot-password")}
          >
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <Text style={[styles.forgotText,{fontWeight: "bold" }]}>
              New User?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('sign-up')}>
              <Text
                style={[
                  styles.forgotText,
                  { color: "#c2272d", fontWeight: "bold" },
                ]}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="light" />
    </>
  );
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with 50% opacity
  },
  headerText: {
    position: "absolute",
    top: 150,
    left: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    color: "white",
    fontSize: 16,
    marginTop: 5,
  },
  card: {
    flex: 0.7,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 25,
    paddingBottom: 40,
    elevation: 5,
    flexDirection: "column",
    justifyContent: "center",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  textFields: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 16,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    height: 60,
    color: "#000",
  },
  forgotText: {
    textAlign: "right",
    color: "#888",
    fontSize: 22,
    marginTop: 5,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#c2272d",
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
