import LottieView from "lottie-react-native";
import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Button } from "../components/Button";
import {
  EmailTextInput,
  PasswordTextInput,
} from "../components/StyledTextInput";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export default function CheckScreen() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const usernameProgress = useSharedValue(0.2);
  const passwordFocus = useSharedValue(false);

  const animatedProps = useAnimatedProps(() => {
    const passwordProgress = 0.098;
    return {
      progress: withTiming(
        passwordFocus.value ? passwordProgress : usernameProgress.value,
        {
          duration: 200,
        }
      ),
    };
  });

  React.useEffect(() => {
    usernameProgress.value = interpolate(
      username.length,
      [0, 20],
      [0.26, 0.4],
      Extrapolate.CLAMP
    );
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AnimatedLottieView
        source={require("../assets/lottie/hiding.json")}
        style={styles.lottie}
        animatedProps={animatedProps}
      />
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Username</Text>
        <EmailTextInput
          style={styles.email}
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.label}>Password</Text>
        <PasswordTextInput
          value={password}
          onChangeText={setPassword}
          onFocus={() => (passwordFocus.value = true)}
          onBlur={() => (passwordFocus.value = false)}
        />
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
