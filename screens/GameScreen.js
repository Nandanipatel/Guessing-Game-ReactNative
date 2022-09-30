import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Number from "../components/Game/Number";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Game/Card";
import Ionicons from '@expo/vector-icons/Ionicons';
import GuessLog from "../components/Game/GuessLog";


function generateRandom(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandom(min, max, exclude);
  }
  else {
    return rndNum;
  }
}

let minBoundry = 1;
let maxBoundry = 100;

function GameScreen({ userNumber, onGameOver }) {

  const initialGuess = generateRandom(1, 100, userNumber);
  const [currentGuess, setCurentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundry = 1;
    maxBoundry = 100;
  }, []);

  function nextGuessHandler(direction) {
    if ((direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)) {
      Alert.alert("Dont'lie", 'you know that this is wrong...huhh', [
        { text: 'sorry!', style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundry = currentGuess;
    }
    else {
      minBoundry = currentGuess + 1;
    }
    const newRndNumber = generateRandom(minBoundry, maxBoundry, currentGuess);
    setCurentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
  }

  const guessRoundsLength = guessRounds.length;

  return (
    <>
      <View style={styles.screen}>
        <Title>Opponents Guess</Title>
        <Number>{currentGuess}</Number>
        <Card>
          <Text style={styles.desc}>Selected number is Lower or Higher !!</Text>
          <View style={styles.btn}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name='md-remove' size={24} color='white' />
            </PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name='md-add' size={24} color='white' />
            </PrimaryButton>
          </View>
        </Card>
        <View style={styles.listContainer}>

          <FlatList
            data={guessRounds}
            renderItem={(itemData) => <GuessLog
              roundNumbr={guessRoundsLength - itemData.index}
              guess={itemData.item} />}
            keyExtractor={(item) => item} />
        </View>
      </View>
    </>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  desc: {
    textAlign: "center",
    marginBottom: 40,
    fontSize: 18,
  },
  btn: {
    flexDirection: "row",
  }
});
