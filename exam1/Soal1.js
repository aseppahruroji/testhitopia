import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  View,
  StyleSheet,
} from "react-native";

const hitungWeight = (str) => {
  const weights = new Set();
  const length = str.length;

  for (let i = 0; i < length; i++) {
    let currentWeight = 0;

    const charWeight = str.charCodeAt(i) - "a".charCodeAt(0) + 1;
    currentWeight += charWeight;
    weights.add(currentWeight);

    let j = i + 1;
    while (j < length && str[j] === str[i]) {
      currentWeight += charWeight;
      weights.add(currentWeight);
      j++;
    }
  }

  return weights;
};

const Soal1 = () => {
  const [input, setInput] = useState("");
  const [queries, setQueries] = useState("");
  const [result, setResult] = useState([]);

  const checkWeights = () => {
    const weights = hitungWeight(input);
    const queryArr = queries.split(",").map(Number); // Ubah ke array angka
    const output = queryArr.map((query) => (weights.has(query) ? "Yes" : "No")); // Periksa bobot
    setResult(output);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Input</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter string"
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter queries"
        value={queries}
        onChangeText={(text) => setQueries(text)}
      />
      <Button title="Check" onPress={checkWeights} />
      {result.length > 0 && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Output: [{result.join(", ")}]</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

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

export default Soal1;
