import React, { useContext } from 'react';

import { View, Button, StyleSheet } from 'react-native';

import AuthContext from '../../contexts/auth';

const SignIn: React.FC = () => {
  const { signed, user, signIn } = useContext(AuthContext);

  console.log(signed);

  console.log(user);

  function hadleSignIn() {
    signIn();
  }
  return (
    <View style={styles.container}>
      <Button title="Sign in" onPress={hadleSignIn} />
    </View>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});