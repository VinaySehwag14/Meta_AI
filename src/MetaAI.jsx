import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import WABG from './assets/w_bg.png';
import CustomHeader from './components/CustomHeader';

const MetaAI = () => {
  return (
    <ImageBackground source={WABG} style={styles.container} resizeMode="cover">
      <CustomHeader />
    </ImageBackground>
  );
};

export default MetaAI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
