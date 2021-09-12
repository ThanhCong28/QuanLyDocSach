/**
 * Ung dung Quan ly Doc sach
 * https://github.com/ThanhCong28/QuanLyDocSach.git
 *
 * Copyright: Nguyen Thanh Cong - 2021
 */
import React, {useState, useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import {useNavigation} from "@react-navigation/native";

function BookScreen( props ) {
    /**
     * Man hinh cua Tab Books o Home.
     * @param navigation Dieu huong man hinh
     * @returns {JSX.Element} Giao dien man hinh + cac xu li chuyen man hinh
     * @constructor
     */

    const navigation = useNavigation()

    const [bookList, setBookList] = useState([  // Danh sách đối tượng Shelf hiện tại (không phải View)
            {id: 0, title: '7 thói quen', author: 'Daniel', shelf: 'Công nghệ'},
            {id: 1, title: 'How Google works', author: 'Mark', shelf: 'Công nghệ'},
            {id: 2, title: 'Hình học vui', author: 'Lobachevski', shelf: 'Toán học'},
            {id: 3, title: 'Số học vui', author: 'Carl F. Gauss', shelf: 'Toán học'},
            {id: 4, title: 'Vật lý vui', author: 'Boltzman', shelf: 'Vật lý'},
            {id: 5, title: 'Trọng lực đo thế nào?', author: 'Peter Cech', shelf: 'Vật lý'},
            {id: 6, title: 'Bí mật lỗ đen', author: 'Carl Sagan', shelf: 'Vật lý'},
        ]
    );
    //const [bookQuantity, setBookQuantity] = useState(5);  // Quản lý số lượng sách / tài liệu hiện tại

    //useEffect(() => setBookQuantity(bookList.length), bookList)

    useEffect(() => {
        let title = bookList.length <= 1 ? (" (" + bookList.length + " book)") : " (" + bookList.length + " books)";
        if (navigation.isFocused()) {
            props.onCurrentIndexListener(0);
            props.onQuantityListener(title);
        }
    })

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
