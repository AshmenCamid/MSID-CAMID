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
        <Text style={{ fontWeight: "bold", fontSize: 25, textAlign: "center", marginTop: 50 }}>
  COLLEGE OF COMPUTING{"\n"}AND INFORMATION SCIENCES
</Text>
      <Image
  source={require("../assets/images/ccis.png")}
  style={{ width: 300, height: 400, marginBottom: 150, borderRadius: 15 }}
/>
      <Text>Developed by</Text>
      <Text style={{ fontWeight: "bold"}}>MARLON JUHN M. TIMOGAN</Text>
    </View>
  );
}
