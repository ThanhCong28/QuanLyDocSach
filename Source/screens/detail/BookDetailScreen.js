/**
 * Ung dung Quan ly Doc sach
 * https://github.com/ThanhCong28/QuanLyDocSach.git
 *
 * Copyright: Nguyen Thanh Cong - 2021
 */
import React from 'react';
import {View, Text, Button} from 'react-native';

function BookDetailScreen( {navigation} ) {
    /**
     * Man hinh chi tiet thong tin cua moi quyen sach.
     * @returns {JSX.Element} Chi tiet thong tin sach
     * @constructor
     */
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>BookDetail Screen area</Text>
        <Button
            title="Go to AddBook screen"
            onPress={() => navigation.navigate('AddBook')}
        />
    </View>
  );
}

export default BookDetailScreen;
