import { View, Text, Button } from "react-native";
import React from "react";

const CategorMealScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to "
        onPress={() => navigation.navigate("Categories")}
      />
    </View>
  );
};

export default CategorMealScreen;
