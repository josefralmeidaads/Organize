import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 40,
  },
  logo: {
    alignSelf: 'center',
  },
  title: {
    color: "#000",
    fontFamily: 'Roboto-Light',
    fontSize: 30,
    letterSpacing: 3,
    textAlign: 'center',
  },
  inputs: {
    marginTop: 30,
  },
  buttons: {
    marginTop: 30,
    height: 120,
    justifyContent: 'space-between',
  },
  btn_salvar: {
    alignSelf: 'center',
    width: 200,
    height: 50,
    borderRadius: 10,
    backgroundColor: theme.colors.blue_500,
  },
  btn_salvar_text: {

  },
  btn_salvar_container: {

  },
  btn_cancelar: {
    alignSelf: 'center',
    width: 200,
    height: 50,
    borderRadius: 10,
    backgroundColor: theme.colors.red_500,
    marginBottom: 10,
  },
  btn_cancelar_text: {

  },
  btn_cancelar_container: {

  },
}); 