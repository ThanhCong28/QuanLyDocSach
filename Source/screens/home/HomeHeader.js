/**
 * Ung dung Quan ly Doc sach
 * https://github.com/ThanhCong28/QuanLyDocSach.git
 *
 * Copyright: Nguyen Thanh Cong - 2021
 */
import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styleHome = StyleSheet.create({
  homeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  homeText: {
  },
  homeButton: {
  }
});

function HomeHeader( {currentTabIndex, headerTitle} ) {
    /**
     * Phan Header o Home.
     * @param currentTabIndex index cua tab tren Home (0, 1, 2)
     * @returns {JSX.Element} Giao dien phan Header + cac xu li chuyen man hinh
     * @constructor
     */
  const navigation = useNavigation();
    console.log("HomeHeader : " + currentTabIndex);
    return (
    <View style={styleHome.homeHeader}>
        <Text style={styleHome.homeText}>
            {headerTitle}
        </Text>
        <Button
            disabled={currentTabIndex === 2}
            title="+"
            style={styleHome.homeButton}
            onPress={() => {
                if (currentTabIndex === 0) navigation.navigate("AddBook");
              }
            }
          />
    </View>
  );
}

export default HomeHeader;
