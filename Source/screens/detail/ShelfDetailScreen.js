/**
 * Ung dung Quan ly Doc sach
 * https://github.com/ThanhCong28/QuanLyDocSach.git
 *
 * Copyright: Nguyen Thanh Cong - 2021
 */
import * as React from 'react';
import { View, Text, Button } from 'react-native';

function ShelfDetailScreen( {navigation} ) {
    /**
     * Man hinh danh sach cac sach trong moi Shelf.
     * @param navigation Dieu huong man hinh
     * @returns {JSX.Element} Danh muc sach
     * @constructor
     */
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Shelf Detail Screen area</Text>
            <Button
                title="Go to BookDetailScreen"
                onPress={() => navigation.navigate('BookDetails')}
            />
        </View>
    );
}

export default ShelfDetailScreen;
