import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Image,
  Alert,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text pressed!");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textRight}>فریبا افراز</Text>
      <Image
        blurRadius={0}
        fadeDuration={1000}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }}
      />
      <Button title="Press Me" onPress={() => Alert.alert("خوش آمدید هرمز")} />
      <div>this is a test text for this project</div>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "1rem",
  },
  textRight: {
    textAlign: "right",
    backgroundColor: "red",
    color: "white",
    padding: "1rem",
    borderRadius: "1rem",
  },
  bottomNavbar: {
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "60px",
    backgroundColor: "blue",
  },
});
