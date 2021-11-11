import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.blue_500,
    paddingHorizontal: 20,
  },
  title: {
    paddingVertical: 40,
    textAlign: 'center',
    color: theme.colors.gray_100,
    fontWeight: 'bold',
    fontSize: 24,
  },
  image: {
    alignSelf: 'center',
  },
  subtitle: {
    textAlign: 'center',
    paddingVertical: 40,
    fontSize: 16,
  },
  button: {
    backgroundColor: theme.colors.blue_300,
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  button_container: {
    width: 60,
    height: 60,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 50, 
  }
});