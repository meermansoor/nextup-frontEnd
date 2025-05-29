import { Text, TouchableOpacity, View, Image, StyleSheet, SafeAreaView } from "react-native";

export default function StartPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../images/bg.png")} // make sure your image is in the same folder
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>Welcome to NextUp!</Text>

        <Text style={styles.paragraph}>
          Your personal secure app for strategising{'\n'}your long-term goals!
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
        onPress={()=>{
            navigation.navigate('signin-up');
        }}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
  },
  content: {
    alignItems: "center",
    marginTop: 60,
  },
  image: {
    width: 280,
    height: 280,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 8,
    color: "#222",
  },
  paragraph: {
    textAlign: "center",
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  buttonContainer: {
    paddingBottom: 69,
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
});
