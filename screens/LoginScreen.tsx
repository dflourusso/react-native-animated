import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button } from "../components/Button";
import {
  EmailTextInput,
  PasswordTextInput,
} from "../components/StyledTextInput";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";

export default function CheckScreen() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Username</Text>
        <EmailTextInput
          style={styles.email}
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.label}>Password</Text>
        <PasswordTextInput value={password} onChangeText={setPassword} />
      </View>
      <View style={styles.buttonContainer}>
        <Button label="Sign in" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
    backgroundColor: Colors.light.background,
  },
  lottie: {
    width: 200,
    alignSelf: "center",
  },
  inputGroup: {
    paddingTop: 48,
    paddingBottom: 24,
  },
  label: {
    paddingBottom: 8,
  },
  email: {
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
