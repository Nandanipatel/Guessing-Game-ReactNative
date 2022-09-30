import { StyleSheet, View, Text, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/Game/Card";

const StartScreen = ({ onPickNumber }) => {
  const [enteredNum, setEnteredNum] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNum(enteredText);
  }

  function resetInputHandler() {
    setEnteredNum("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNum);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number !",
        "Input Number has to be in between 1 and 99.",
        [{ text: "okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>-- Guess The Number --</Title>
      <Card>
        <Text style={styles.inputText}>Enter a number to be guessed</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNum}
          onChangeText={numberInputHandler}
        />
        <View style={styles.btn}>
          <PrimaryButton onPress={resetInputHandler}>RESET</PrimaryButton>
          <PrimaryButton onPress={confirmInputHandler}>CONFIRM</PrimaryButton>
        </View>
      </Card>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  inputText: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    // fontWeight: 600,
  },

  numberInput: {
    height: 50,
    fontSize: 32,
    marginVertical: 8,
    borderBottomColor: "#1B2430",
    borderBottomWidth: 2,
    color: "#1B2430",
    width: 50,
    // fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 8,
    alignSelf: "center",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
