import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Bars3BottomLeftIcon,
  CheckBadgeIcon,
} from 'react-native-heroicons/solid';
import {RFValue} from 'react-native-responsive-fontsize';
import MetaAILogo from '../assets/logo_s.jpeg';
import CustomText from './CustomText';

const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.subContainer}>
          <TouchableOpacity>
            <Bars3BottomLeftIcon size={RFValue(20)} color="white" />
          </TouchableOpacity>
          <View style={styles.flexRow}>
            <Image source={MetaAILogo} style={styles.img} />
            <View>
              <CustomText fontWeight="bold">
                Meta AI <CheckBadgeIcon color="#23d366" size={16} />
              </CustomText>
              <CustomText fontWeight={500} opacity={0.7}>
                with Llama 3
              </CustomText>
            </View>
          </View>
          <TouchableOpacity>
            <CustomText size={14}>CLear</CustomText>
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
  img: {
    width: 38,
    height: 38,
    borderRadius: 40,
  },
  flexRow: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  subContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
});
