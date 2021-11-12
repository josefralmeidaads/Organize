import { Dimensions, StyleSheet } from "react-native";
import theme from "../../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: theme.colors.blue_500,
    position: "relative",
    zIndex: 0,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: theme.colors.gray_500,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: 20,
  },
  logo: {
    position: "absolute",
    right: 0,
    left: Dimensions.get("screen").width / 1.3,
    top: 0,
  }
});