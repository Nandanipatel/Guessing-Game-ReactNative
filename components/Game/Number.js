import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Number({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default Number;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.primary,
    padding: 12,
    borderRadius: 5,
    margin: 24,
    marginTop:80,
    alignItems: "center",
    justifyContent: "center",

  },
  numberText: {
    color: Colors.primary,
    fontSize: 36,
   
  },
});
