import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EmptyState = () => (
  <View style={styles.container}>
    <Text style={styles.emoji}>🌍</Text>
    <Text style={styles.title}>No countries found</Text>
    <Text style={styles.message}>Try adjusting your search or filters</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 8,
  },
  message: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
  },
});

export default EmptyState;
