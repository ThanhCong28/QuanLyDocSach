/**
 * Ung dung Quan ly Doc sach
 * https://github.com/ThanhCong28/QuanLyDocSach.git
 *
 * Copyright: Nguyen Thanh Cong - 2021
 */
import * as React from 'react';
import { View, Text, Button } from 'react-native';

function BookScreen( {navigation} ) {
    /**
     * Man hinh cua Tab Books o Home.
     * @param navigation Dieu huong man hinh
     * @returns {JSX.Element} Giao dien man hinh + cac xu li chuyen man hinh
     * @constructor
     */
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Books Screen area</Text>
       <Button
           title="Go to BookDetailScreen"
           onPress={() => navigation.navigate('BookDetails')}
       />
    </View>
  );
}

export default BookScreen;
