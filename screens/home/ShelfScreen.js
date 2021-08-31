/**
 * Ung dung Quan ly Doc sach
 * https://github.com/ThanhCong28/QuanLyDocSach.git
 *
 * Copyright: Nguyen Thanh Cong - 2021
 */
import * as React from 'react';
import {View, Text, Button} from 'react-native';

function ShelfScreen( {navigation} ) {
    /**
     * Man hinh cua Tab Shelves o Home.
     * @param navigation Dieu huong man hinh
     * @returns {JSX.Element} Giao dien man hinh + cac xu li chuyen man hinh
     * @constructor
     */
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Shelves Screen area</Text>
        <Button
            title="Go to ShelfDetailScreen"
            onPress={() => navigation.navigate('ShelfDetails')}
        />
    </View>
  );
}

export default ShelfScreen;
