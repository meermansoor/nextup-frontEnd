import { useState } from "react";
import { StyleSheet, View, TextInput, Text, Button, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";


export default function ForgotPassword({ navigation }) {
  const [newPass, setNewPass] = useState('');
  const [confirmNewPass, setConfirmNewPass] = useState('');

  return (
    <View style={styles.outsideCont}>
      <View>
        <TextInput
          style={styles.textFields}
          placeholder="New Password"
          secureTextEntry
          onChange={setNewPass}
          value={newPass}
        />
      </View>
      <View>
        <TextInput
          style={styles.textFields}
          placeholder="Confirem New Password"
          secureTextEntry
          onChangeText={setConfirmNewPass}
          value={confirmNewPass}
        />
      </View>
      <View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = new StyleSheet.create({
  outsideCont: {
    flex:1,
    flexDirection:'column-reverse',
    justifyContent: "center",
    alignItems: "center",
  },
  textFields: {
    width:300,
    height:50,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "gray",
    padding: 12,
    marginVertical: 10,
  },
});
