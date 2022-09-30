import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

function GuessLog({ roundNumbr, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>#{roundNumbr}</Text>
      <Text style={styles.text}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLog;

const styles = StyleSheet.create({
  listItem: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4, //for android shadow
    //for IOS shadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  text: {
    fontFamily: "open-sans",
  },
});
