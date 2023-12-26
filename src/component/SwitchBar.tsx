import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { width } from '../assects/strings';
import { colors } from '../assects/colors';
import fonts from '../assects/fonts';
import Images from '../assects/Images';
import { TextStyle } from 'react-native';

interface SwitchBarProps {
  status: string;
}

const SwitchBar: React.FC<SwitchBarProps> = ({ status }) => {
  const navigation = useNavigation();
  const inset = useSafeAreaInsets();

  return (
    <View style={{ width: width / 12, height: width / 25, paddingHorizontal: 2, alignItems: status ? 'flex-end' : 'flex-start', justifyContent: 'center', marginVertical: 5, alignSelf: 'flex-end', borderWidth: 0.5, borderColor: status ? colors.secondryColor : '#ccc', backgroundColor: status ? colors.white : '#ccc', borderRadius: 100 }} >
      <View style={{ width: width / 33, height: width / 33, borderRadius: 100, backgroundColor: status ? colors.secondryColor : '#777' }} >

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: width, flexDirection: 'row', alignItems: 'flex-end', paddingBottom: 15, justifyContent: 'space-between', paddingHorizontal: 15, backgroundColor: colors.secondryColor },
});

export default SwitchBar;
