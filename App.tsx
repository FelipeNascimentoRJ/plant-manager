import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {

  return (
    <View style={styles.container}>
      <Text>NLW5</Text>
    </View>
  );
};

export default App;
