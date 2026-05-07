import React from "react";

// Mock React Native with actual React components
jest.mock("react-native", () => {
  const React = require("react");
  return {
    View: React.forwardRef(({ children, ...props }, ref) =>
      React.createElement("View", { ref, ...props }, children),
    ),
    Text: React.forwardRef(({ children, ...props }, ref) =>
      React.createElement("Text", { ref, ...props }, children),
    ),
    StyleSheet: {
      create: jest.fn((styles) => styles),
    },
    FlatList: React.forwardRef(({ children, ...props }, ref) =>
      React.createElement("FlatList", { ref, ...props }, children),
    ),
    ScrollView: React.forwardRef(({ children, ...props }, ref) =>
      React.createElement("ScrollView", { ref, ...props }, children),
    ),
    SafeAreaView: React.forwardRef(({ children, ...props }, ref) =>
      React.createElement("SafeAreaView", { ref, ...props }, children),
    ),
    TouchableOpacity: React.forwardRef(({ children, ...props }, ref) =>
      React.createElement("TouchableOpacity", { ref, ...props }, children),
    ),
    ActivityIndicator: React.forwardRef(({ children, ...props }, ref) =>
      React.createElement("ActivityIndicator", { ref, ...props }, children),
    ),
    RefreshControl: React.forwardRef(({ children, ...props }, ref) =>
      React.createElement("RefreshControl", { ref, ...props }, children),
    ),
    TextInput: React.forwardRef(({ children, ...props }, ref) =>
      React.createElement("TextInput", { ref, ...props }, children),
    ),
    Image: React.forwardRef(({ children, ...props }, ref) =>
      React.createElement("Image", { ref, ...props }, children),
    ),
  };
});

// Mock react-native-safe-area-context
jest.mock("react-native-safe-area-context", () => {
  const React = require("react");
  return {
    SafeAreaView: React.forwardRef(({ children, ...props }, ref) =>
      React.createElement("SafeAreaView", { ref, ...props }, children),
    ),
  };
});

// Mock @react-navigation/native-stack
jest.mock("@react-navigation/native-stack", () => ({
  createNativeStackNavigator: jest.fn(() => ({
    Navigator: "Navigator",
    Screen: "Screen",
  })),
  NativeStackScreenProps: {},
}));

// Mock @react-navigation/native
jest.mock("@react-navigation/native", () => ({
  NavigationContainer: "NavigationContainer",
  useNavigation: jest.fn(),
}));

// Mock @react-navigation/native
jest.mock("@react-navigation/native", () => ({
  NavigationContainer: "NavigationContainer",
  useNavigation: jest.fn(),
}));
