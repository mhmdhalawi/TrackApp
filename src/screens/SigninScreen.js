import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SigninScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SigninScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
  },
});

export default SigninScreen;
