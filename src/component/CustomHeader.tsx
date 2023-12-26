import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { width } from '../assects/strings';
import { colors } from '../assects/colors';
import fonts from '../assects/fonts';
import Images from '../assects/Images';

interface CustomHeaderProps {
  title: string;
  renderLeftIcon?: () => React.ReactNode;
  titleStyle?: TextStyle;
  menuIcon?: boolean;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, renderLeftIcon, titleStyle, menuIcon }) => {
  const navigation = useNavigation();
  const inset = useSafeAreaInsets();

  return (
    <View style={[styles.container, { height: width / 7 + inset.top }]}>
      <StatusBar backgroundColor={colors.secondryColor} barStyle={'light-content'} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {renderLeftIcon ? (
          renderLeftIcon()
        ) : (
          <TouchableOpacity onPress={menuIcon ? () => navigation?.openDrawer() : () => navigation.goBack()}>
            <Icon name={menuIcon ? 'menu' : 'chevron-back'} color={colors.white} size={width / 15} />
          </TouchableOpacity>
        )}
        <Text style={[{ marginLeft: 10, color: colors.white, fontFamily: fonts.LexendSemiBold, fontSize: 17 }, titleStyle]}>
          {title}
        </Text>
      </View>
      <Image style={{ width: width / 4, height: width / 7 }} source={Images.splash} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: width, flexDirection: 'row', alignItems: 'flex-end', paddingBottom: 15, justifyContent: 'space-between', paddingHorizontal: 15, backgroundColor: colors.secondryColor },
});

export default CustomHeader;
