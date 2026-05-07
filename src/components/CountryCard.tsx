import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  Image,
} from "react-native";
import { Country } from "../types";

interface CountryCardProps {
  country: Country;
  onPress: (country: Country) => void;
  style?: ViewStyle;
}

export const CountryCard: React.FC<CountryCardProps> = ({
  country,
  onPress,
  style,
}) => (
  <TouchableOpacity
    style={[styles.card, style]}
    onPress={() => onPress(country)}
    activeOpacity={0.7}
  >
    <View style={styles.header}>
      <View style={styles.flagContainer}>
        {country.flagURL.png || country.flagURL.svg ? (
          <Image
            source={{ uri: country.flagURL.png || country.flagURL.svg }}
            style={styles.flagImage}
          />
        ) : (
          <Text style={styles.flagEmoji}>🌍</Text>
        )}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.name}>{country.countryName}</Text>
        <Text style={styles.code}>{country.countryCode}</Text>
      </View>
    </View>
    <View style={styles.details}>
      <View style={styles.detailItem}>
        <Text style={styles.label}>Currency</Text>
        <Text style={styles.value}>{country.currency}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.label}>Locale</Text>
        <Text style={styles.value}>{country.internetCountryCode}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  flagContainer: {
    marginRight: 12,
    width: 32,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  flagImage: {
    width: 24,
    height: 16,
    resizeMode: "contain",
  },
  flagEmoji: {
    fontSize: 24,
  },
  titleContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 4,
  },
  code: {
    fontSize: 12,
    color: "#9ca3af",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailItem: {
    flex: 1,
  },
  label: {
    fontSize: 11,
    color: "#9ca3af",
    fontWeight: "500",
    textTransform: "uppercase",
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    fontWeight: "500",
    color: "#374151",
  },
});
