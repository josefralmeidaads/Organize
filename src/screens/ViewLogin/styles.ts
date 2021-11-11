import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 50,
  },
  title: {
    color: theme.colors.gray_700,
    textAlign: 'center',
    fontSize: 25,
    letterSpacing: 2,
    fontFamily: 'Roboto-Light',
    marginTop: 20,
  },
  view_input: {
    marginTop: 50,
  },
  input: {
    color: theme.colors.blue_500,
    marginBottom: -10,
    textAlign: 'center',
  },
  input_container: {
    alignSelf: 'center',
    width: 300,
    textAlign: 'center',
  },
  btn_acessar: {
    backgroundColor: theme.colors.blue_500,
    alignSelf: 'center',
    width: 200,
    height: 50,
    borderRadius: 10,
  },
  btn_acessar_text: {
    fontFamily: 'Roboto-Light'
  },
  btn_cadastrar: {
    backgroundColor: theme.colors.gray_700,
    alignSelf: 'center',
    width: 200,
    height: 50,
    borderRadius: 10,
  },
  btn_cadastrar_text: {
    fontFamily: 'Roboto-Light'
  },
  view_buttons: {
    justifyContent: 'space-between',
    height: 110,
  }
});