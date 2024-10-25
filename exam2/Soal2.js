import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  View,
  StyleSheet,
} from "react-native";

const isBalanced = (str) => {
  const stack = [];
  const openingBrackets = ["(", "[", "{"];
  const closingBrackets = [")", "]", "}"];
  const matchingBracket = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (stack.length === 0 || stack.pop() !== matchingBracket[char]) {
        return "NO";
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO";
};

export default function Soal2() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const checkBalanced = () => {
    setResult(isBalanced(input));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Input</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter bracket string"
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <Button title="Check" onPress={checkBalanced} />
      {result !== "" && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Output: {result}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 20,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
