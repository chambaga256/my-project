import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  const renderGrid = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("CategoriesMeal")}
        style={styles.creatGrid}
      >
        <View>
          <Text>{item.type}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGrid} />
    </View>
  );
};

const styles = StyleSheet.create({
  creatGrid: {
    flex: 1,
    margin: 15,
    height: 150,
    backgroundColor: "green",
  },
});
export default CategoriesScreen;
