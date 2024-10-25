import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  View,
  StyleSheet,
} from "react-native";

const buatPalindrome = (s, left, right, k, changes) => {
  if (left > right) {
    return { result: s, changes };
  }

  if (s[left] !== s[right]) {
    if (k <= 0) {
      return { result: "-1", changes };
    }
    const newChar = Math.max(s[left], s[right]);
    s = s.substring(0, left) + newChar + s.substring(left + 1);
    s = s.substring(0, right) + newChar + s.substring(right + 1);
    return buatPalindrome(s, left + 1, right - 1, k - 1, changes + 1);
  }

  return buatPalindrome(s, left + 1, right - 1, k, changes);
};

const maximizePalindrome = (s, left, right, k, changes) => {
  if (left > right) {
    return { result: s, changes };
  }

  if (s[left] === s[right]) {
    if (k > 0 && s[left] !== "9") {
      s = s.substring(0, left) + "9" + s.substring(left + 1);
      s = s.substring(0, right) + "9" + s.substring(right + 1);
      return maximizePalindrome(s, left + 1, right - 1, k - 2, changes + 2);
    }
  } else {
    const newChar = "9";
    s = s.substring(0, left) + newChar + s.substring(left + 1);
    s = s.substring(0, right) + newChar + s.substring(right + 1);
    return maximizePalindrome(s, left + 1, right - 1, k - 1, changes + 1);
  }

  return maximizePalindrome(s, left + 1, right - 1, k, changes);
};

export default function Soal3() {
  const [input, setInput] = useState("");
  const [k, setK] = useState("");
  const [result, setResult] = useState("");

  const findPalindrome = () => {
    let initialChanges = 0;
    const firstPass = buatPalindrome(
      input,
      0,
      input.length - 1,
      parseInt(k),
      initialChanges
    );

    if (firstPass.result === "-1") {
      setResult("-1");
      return;
    }

    const secondPass = maximizePalindrome(
      firstPass.result,
      0,
      firstPass.result.length - 1,
      parseInt(k) - firstPass.changes,
      firstPass.changes
    );
    setResult(secondPass.result);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Input</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number string"
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter k "
        value={k}
        keyboardType="numeric"
        onChangeText={(text) => setK(text)}
      />
      <Button title="Find Palindrome" onPress={findPalindrome} />
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
