import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Colors from "../constants/Colors";
import { Text } from "./Themed";

type ButtonProps = {
  label: string;
  onPress?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 6,
  },
  text: {
    color: Colors.light.background,
    fontSize: 20,
  },
});
