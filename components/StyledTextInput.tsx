import * as React from "react";

import { TextInput, TextInputProps } from "./Themed";

export function EmailTextInput(props: TextInputProps) {
  return <TextInput {...props} style={[props.style]} autoCapitalize="none" />;
}

export function PasswordTextInput(props: TextInputProps) {
  return <TextInput {...props} style={[props.style]} secureTextEntry />;
}
