import { Text, StyleSheet } from "react-native";
import React from "react";

function Title({ children }) {
  return (
    <>
      <Text style={styles.title}>{children}</Text>
    </>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginTop: 20,
    borderRadius: 10,
    color: "white",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "white",
    padding: 12,
  },
});
