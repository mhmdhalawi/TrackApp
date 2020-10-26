import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const TrackListScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TrackListScreen</Text>
      <Button title="Go to Track Detail Screen" onPress={() => navigate('TrackDetail')} />
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

export default TrackListScreen;
