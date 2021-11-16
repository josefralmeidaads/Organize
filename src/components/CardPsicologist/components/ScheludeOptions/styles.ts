import { Dimensions, StyleSheet } from "react-native";
import theme from "../../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: Dimensions.get("screen").height / 1.5,
    padding: 20,
    marginHorizontal: 5,
    borderRadius: 10,
    flex: 1,
  },
  title1: {
    fontFamily: 'Roboto-Bold',
    color: theme.colors.blue_700,
    fontSize: 20,
  },
  title2: {
    fontFamily: 'Roboto-Bold',
    color: theme.colors.blue_700,
    fontSize: 20,
  },
  button: {
    backgroundColor: theme.colors.blue_500,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  button_text: {
    color: "#000",
    fontSize: 20,
    textAlign: 'center',
  },
  button_container: {

  },
  button_schedule: {
    backgroundColor: theme.colors.blue_500,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 5,
  },
  button_text_schedule: {
    color: "#000",
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 5,
  },
  button_container_schedule: {

  },

})