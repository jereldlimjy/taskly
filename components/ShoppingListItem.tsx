import { TouchableOpacity, Text, View, StyleSheet, Alert } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { theme } from "../theme";

interface ShoppingListItemProps {
  name: string;
  isCompleted?: boolean;
}

export function ShoppingListItem({ name, isCompleted }: ShoppingListItemProps) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
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
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <Text
        style={[
          styles.itemText,
          isCompleted ? styles.completedText : undefined,
        ]}
      >
        {name}
      </Text>
      <TouchableOpacity onPress={handleDelete}>
        <AntDesign
          name="closecircleo"
          size={24}
          color={isCompleted ? "grey" : theme.colorRed}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 200,
  },
  completedText: {
    color: "grey",
    textDecorationLine: "line-through",
    textDecorationColor: "grey",
  },
});
