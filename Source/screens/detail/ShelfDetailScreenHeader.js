/**
 * Ung dung Quan ly Doc sach
 * https://github.com/ThanhCong28/QuanLyDocSach.git
 *
 * Copyright: Nguyen Thanh Cong - 2021
 */
import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from "@react-navigation/native";

function ShelfDetailScreenHeader() {
    /**
     * Header cua Man hinh Chi tiet gia sach (danh sach cac sach trong Gia).
     * @returns {JSX.Element} Chi tiet thong tin
     * @constructor
     */
    const navigation = useNavigation();
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        }}>
            <Text>ShelfDetails</Text>
            <Button
                title="+"
                onPress={() => navigation.navigate('AddBook')}
            />
        </View>
    );
}

export default ShelfDetailScreenHeader;
