import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.blue_500,
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 35,
    color: theme.colors.gray_100,
    marginTop: 40,
  },
  options: {
    justifyContent: 'space-between',
    height: 300,
    marginTop: 50,
  },
  btnPsico: {
    backgroundColor: theme.colors.blue_300,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  btnPsico_text: {
    color: theme.colors.gray_100,
    fontSize: 40,
    fontFamily: 'Roboto-Bold',
  },
  btnClient: {
    backgroundColor: theme.colors.blue_300,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  btnClient_text: {
    color: theme.colors.gray_100,
    fontSize: 40,
    fontFamily: 'Roboto-Bold',
  },
  button: {
    marginTop: 50,
    width: 80,
    height: 80,
    backgroundColor: theme.colors.blue_300,
    borderRadius: 10,
    alignSelf: 'center',
  },
  button_container: {
    marginTop: 50,
    width: 80,
    height: 80,
    backgroundColor: theme.colors.blue_300,
    borderRadius: 10,
    alignSelf: 'center',
  }
});