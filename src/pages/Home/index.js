import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import * as Animatable from "react-native-animatable";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerName}>
        <Animatable.Text
          delay={500}
          animation="fadeInUp"
          style={styles.userName}
        >
          Olá, Astro
        </Animatable.Text>
      </View>

      <View style={styles.containerBack}>
        <Animatable.View
          delay={600}
          animation="fadeInUpBig"
          style={styles.containerInfo}
        >
          <Text style={styles.title}>Your Tasks</Text>
          {/* <Text style={styles.text}>Let's start</Text> */}

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("PageProfile")}
          >
            <Text style={styles.buttonText}>Your Profile</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#334996",
  },
  containerName: {
    backgroundColor: "#334996",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  userName: {
    marginTop: 25,
    marginBottom: 60,
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  containerBack: {
    flex: 2,
    backgroundColor: "#fff",
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  containerInfo: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: "-8%",
    paddingStart: "5%",
    paddingEnd: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: "#a1a1a1",
  },
  button: {
    position: "absolute",
    backgroundColor: "#334996",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
