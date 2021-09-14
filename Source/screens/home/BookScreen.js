/**
 * Ung dung Quan ly Doc sach
 * https://github.com/ThanhCong28/QuanLyDocSach.git
 *
 * Copyright: Nguyen Thanh Cong - 2021
 */
import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, FlatList, SafeAreaView, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from "@react-navigation/native";

import Icon_7ThoiQuen from '../../resource/img/7_thoi_quen_cover.jpg';
import Icon_DungLoLang from '../../resource/img/dung_lo_lang_cover.jpg';
import Icon_HanhTrinh from '../../resource/img/hanh_trinh_cover.jpg';
import Icon_NguoiNamCham from '../../resource/img/nguoi_nam_cham_cover.jpg';
import Icon_NguoiThichDem from '../../resource/img/nguoi_thich_dem_cover.jpg';
import Icon_TaiChinhCaNhan from '../../resource/img/tai_chinh_ca_nhan_cover.jpg';
import Icon_TuDuyRanhMach from '../../resource/img/tu_duy_ranh_mach_cover.jpg';

import {CustomConfirmDialog} from '../common/Dialog';

// Tính toán hiển thị item theo kích thước màn hình
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log("windowWidth : " + windowWidth + ", windowHeight : " + windowHeight)

const styleBooks = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        paddingBottom: 90,
        marginHorizontal: 16
    },
    item: {
        margin: 10,
        padding: 3,
        fontSize: 40,
        width: windowWidth/2.3,
        height: windowHeight/3,
        marginVertical: 5,
        flexDirection: 'column',
        alignItems: 'center'
    },
    itemText: {
        maxWidth: '80%',
    },
    addShelf: {
        position: 'absolute',
        bottom: 15,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {},
});

function BookScreen( props ) {
    /**
     * Man hinh cua Tab Books o Home.
     * @param navigation Dieu huong man hinh
     * @returns {JSX.Element} Giao dien man hinh + cac xu li chuyen man hinh
     * @constructor
     */

    const navigation = useNavigation();
    const [selectedId, setSelectedId] = useState(null);  // ID của view item (book) đang focus hiện tại - bằng thao tác Press
    const [bookId, setBookId] = useState();  // Quản lý Id của (chỉ một) Book cần bị xóa khi LongPress
    const [bookList, setBookList] = useState([  // Danh sách đối tượng Book hiện tại (không phải View)
            {id: 0, title: '7 thói quen', author: 'Daniel', shelf: 'Công nghệ', imgsrc: Icon_7ThoiQuen},
            {id: 1, title: 'Người nam châm', author: 'Mark', shelf: 'Công nghệ', imgsrc: Icon_NguoiNamCham},
            {id: 2, title: 'Đừng lo lắng', author: 'Lobachevski', shelf: 'Toán học', imgsrc: Icon_DungLoLang},
            {id: 3, title: 'Tài chính cá nhân', author: 'Carl F. Gauss', shelf: 'Toán học', imgsrc: Icon_TaiChinhCaNhan},
            {id: 4, title: 'Những cuộc phiêu lưu của người thích đếm', author: 'Boltzman', shelf: 'Toán học', imgsrc: Icon_NguoiThichDem},
            {id: 5, title: 'Hành trình về phương Đông', author: 'Peter Cech', shelf: 'Vật lý', imgsrc: Icon_HanhTrinh},
            {id: 6, title: 'Nghệ thuật tư duy rành mạch', author: 'Carl Sagan', shelf: 'Vật lý', imgsrc: Icon_TuDuyRanhMach},
        ]
    );
    //const [bookQuantity, setBookQuantity] = useState(5);  // Quản lý số lượng sách / tài liệu hiện tại

    //useEffect(() => setBookQuantity(bookList.length), bookList)

    useEffect(() => {
        let title = bookList.length <= 1 ? (" (" + bookList.length + " book)") : " (" + bookList.length + " books)";
        if (navigation.isFocused()) {
            // Cập nhật tab index hiện tại cũng như title trên header ngược về cho HomeTab
            props.onCurrentIndexListener(0);
            props.onQuantityListener(title);
        }
    }, [])

    const [visible, setVisible] = useState(false);  // Quyết định ẩn / hiện Custom dialog

    function onClose() {
        setVisible(false);
    }

    return (
        <SafeAreaView>
            <FlatList
                contentContainerStyle={{margin:4}}
                horizontal={false}
                numColumns={2}
                data={bookList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
            />
            <CustomConfirmDialog visible={visible} isWarning={true} title="Warning !"
                                         content="    Do you want to Remove the book from overall application? If you click 'YES', the action can not be revert."
                                         btn1Name="NO"
                                         btn2Name="YES"
                                         onBtn1Click={onClose}
                                         onBtn2Click={() => {
                                             DeleteItem(bookId);
                                             onClose();
                                         }}
                                         onCloseClick={onClose}
            />
        </SafeAreaView>
    );

    function renderItem({ item }) {
        const backgroundColor = item.id === selectedId ? "#00ff00" : "#00ffff";
//    const color = item.id === selectedId ? 'white' : 'black';
        return (
            <ItemBook
                itemId={item.id}
                itemName={item.title}
                onPress={() => {
                    setSelectedId(item.id);
                    navigation.navigate('BookDetails');
                }
                }
                backgroundColor={{ backgroundColor }}
                //        textColor={{ color }}
            />
        );
    }

    function ItemBook({itemId, itemName, onPress, backgroundColor}) {
        return (
            <TouchableOpacity
                onPress={onPress}
                onLongPress={() => {
                    console.log("Long Press");
                    setVisible(true);  // Show Confirm dialog gom 2 button
                    setBookId(itemId);  // Danh dau index cua item vua Long Press
                }}
                style={[styleBooks.item, backgroundColor]}
                activeOpacity={0.5} >
                <View style={styleBooks.item}>
                    <Image source={bookList[itemId].imgsrc}/>
                    <Text>{itemName}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    function DeleteItem (index) {
        console.log("book index = ", index);
        let itemsCopy = [...bookList];
        console.log("Books itemsCopy 1: ", itemsCopy);
        itemsCopy.splice(index, 1);
        console.log("Books itemsCopy 2: ", itemsCopy);

        const RearrangeIndex = (item) => {
            return (
                item.id < index ? item : {id: item.id-1, title: item.title, author: item.author, shelf: item.shelf, imgsrc: item.imgsrc}
            );
        }

        setBookList(itemsCopy.map(RearrangeIndex));
        //console.log("bookList : ", bookList);
    }
}

export default BookScreen;
