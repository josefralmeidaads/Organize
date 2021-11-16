import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  name: {
    color: theme.colors.gray_500,
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    textAlignVertical: 'center',
    width: 250,
  },
  title_pt_1: {
    fontFamily: 'Roboto-Light',
    fontSize: 30,
  },
  title_pt_2: {
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
  },
});