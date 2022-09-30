import { Text, View, StyleSheet, Image } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/colors";

function ResultScreen({roundsNumber,userNumber, onStartNewGame}) {
  return (
    <View style={styles.rootScreen}>
      <Title>GAME OVER !!</Title>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/img2.png")} style={styles.img} />
      </View>
      <Text style={styles.summeryText}>
        Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to
        guess the number
        <Text style={styles.highlightText}> {userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>New Game</PrimaryButton>
    </View>
  );
}

export default ResultScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    padding: 24,
    // justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 4,
    borderColor: "black",
    overflow: "hidden",
    margin: 36,
    alignSelf: "center",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  summeryText: {
    fontFamily: "open-sans",
    fontSize:24,
    textAlign:"center",
    marginVertical:24,
    color: Colors.primary,

  },
  highlightText: {
    // fontFamily: "open-sans-bold",
    color: Colors.primary,
  },
});
