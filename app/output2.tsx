import { Image, Text, View } from "react-native";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
  source={require("../assets/images/markzuckerburg.png")}
  style={{ width: 300, height: 400, marginBottom: 1, borderRadius: 15 }}
/>
    <Text style={{ fontWeight: "bold" }}>Mark Zuckerberg</Text>
      <Text>CEO Meta</Text>
    </View>
  );
}
