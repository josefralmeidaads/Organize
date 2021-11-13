import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    marginBottom: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  header: {
    flexDirection: 'row',
  },
  avatar: {
    width: 90,
    height: 90,
    marginRight: 10,
    borderRadius: 45,
  },
  info_psicologist: {

  },
  psico_name: {
    fontFamily: 'Roboto-Medium',
    color: theme.colors.gray_500,
    fontSize: 20,
    textAlign: 'center',
  },
  psico_price: {
    color: theme.colors.blue_500,
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
  },
  psico_crp: {
    color: theme.colors.gray_500,
  },
  psico_adress: {
    flexDirection: 'row',
  },
  psico_adress_text: {
    color: theme.colors.gray_500,
  },
  experience: {

  },
  experience_title: {
    paddingVertical: 20,
    textAlign: 'center',
    color: theme.colors.blue_500,
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
  },
  experience_text: {
    color: theme.colors.gray_700,
    fontWeight: '600',
  },
  button: {
    backgroundColor: theme.colors.blue_500,
    borderRadius: 5,
    
  },
  button_text: {
    color: theme.colors.gray_500,
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  button_container: {
    paddingVertical: 10,
  }
});