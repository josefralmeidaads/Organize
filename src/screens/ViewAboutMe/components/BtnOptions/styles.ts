import { StyleSheet } from "react-native";
import theme from "../../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  button: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.blue_700,
    backgroundColor: "transparent",
  },
  button_logout: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.red_500,
    backgroundColor: "transparent",
  },
  text: {
    color: theme.colors.blue_700,
    fontSize: 20,
  },
  text_logout: {
    color: theme.colors.red_500,
    fontSize: 20,
  }
});