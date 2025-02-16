import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { theme } from "./theme";
export default function App() {
  const handleDelete = () => {
    Alert.alert(
      "Are you sure you want to delete this?",
      "It will be gone for good",
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => {
            console.log("canceled");
          },
        },
        {
          text: "Yes",
          style: "destructive",
          onPress: () => {
            console.log("deleted");
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
    fontWeight: 200,
  },
  deleteButton: {
    backgroundColor: "black",
    borderRadius: 6,
    padding: 6,
  },
  deleteText: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
