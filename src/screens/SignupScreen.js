import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context } from '../context/createDataContext';

const SignupScreen = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer>
        <Button title="Sign up" />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 200,
    flex: 1,
    justifyContent: 'center',
  },
});

export default SignupScreen;
