import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  text: {
    color: '#6b6b6b',
    fontSize: 16,
    fontWeight: 'bold',
  },
  boldText: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  input: {
    backgroundColor: '#1f1e25',
    height: 56,
    borderRadius: 5,
    flex: 1,
    marginRight: 12,
    color: '#fff',
    paddingHorizontal: 16,
    fontSize: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  buttonContainer: {
    justifyContent: 'center',
    marginTop: 36,
    flexDirection: 'row',
    marginBottom: 42,
  }
});
