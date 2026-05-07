import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/RootNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "CountryDetails">;

export const CountryDetailsScreen: React.FC<Props> = ({ route }) => {
  const { country } = route.params;

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Country Details</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.flagContainer}>
          {country.flagURL.png ? (
            <Image
              source={{ uri: country.flagURL.png }}
              style={styles.flagImage}
            />
          ) : country.flagURL.svg ? (
            <Image
              source={{ uri: country.flagURL.svg }}
              style={styles.flagImage}
            />
          ) : (
            <Text style={styles.largeFlag}>🌍</Text>
          )}
        </View>

        <View style={styles.card}>
          <Text style={styles.countryName}>{country.countryName}</Text>
          <Text style={styles.countryCode}>{country.countryCode}</Text>

          <View style={styles.divider} />

          <DetailRow label="Country ID" value={country.countryId || "-"} />
          <DetailRow
            label="Internet Code"
            value={country.internetCountryCode || "-"}
          />
          <DetailRow label="Currency" value={country.currency || "-"} />
          <DetailRow
            label="Currency Code"
            value={country.currencyCode || "-"}
          />
          <DetailRow
            label="Currency Icon"
            value={country.currencyIcon || "-"}
          />
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>ℹ️ Information</Text>
          <Text style={styles.infoText}>
            This country is available in the PayFusion platform. You can use the
            country code and locale information for API integrations.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

interface DetailRowProps {
  label: string;
  value: string;
}

const DetailRow: React.FC<DetailRowProps> = ({ label, value }) => (
  <View style={styles.detailRow}>
    <Text style={styles.detailLabel}>{label}</Text>
    <Text style={styles.detailValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    flexDirection: "row",
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 16,
    color: "#1e40af",
    fontWeight: "600",
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "700",
    color: "#1f2937",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  flagContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  flagImage: {
    width: 80,
    height: 60,
    resizeMode: "contain",
  },
  largeFlag: {
    fontSize: 64,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  countryName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: 4,
  },
  countryCode: {
    fontSize: 16,
    color: "#9ca3af",
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#e5e7eb",
    marginVertical: 12,
  },
  detailRow: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6b7280",
  },
  detailValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1f2937",
  },
  infoCard: {
    backgroundColor: "#e0e7ff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: "#1e40af",
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1e40af",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 13,
    color: "#3730a3",
    lineHeight: 20,
  },
});
