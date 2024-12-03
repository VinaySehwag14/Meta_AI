import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.subContainer}>
          <TouchableOpacity>
            <Text>Hey</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'rgba(20,25,46,1)',
    borderBottomWidth: 0.18,
    borderBottomColor: 'rgba(62,62,63,1)',
  },
  subContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
});
