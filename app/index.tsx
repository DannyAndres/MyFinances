import { Text, TextInput, Button, SafeAreaView, View } from 'react-native';
import React, { useState } from 'react';
import { auth } from '../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
      <View>
        <Text>Sign up</Text>
        <TextInput
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <Button
          title="Sign up"
          onPress={() => createUserWithEmailAndPassword(auth, email, password)}
        />
      </View>
    </SafeAreaView>
  );
}

export default index;