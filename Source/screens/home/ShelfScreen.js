/**
 * Ung dung Quan ly Doc sach
 * https://github.com/ThanhCong28/QuanLyDocSach.git
 *
 * Copyright: Nguyen Thanh Cong - 2021
 */
import React, {useState, useEffect} from 'react';
import {
    Image,
    View,
    Button,
    Text,
    StyleSheet,
    Keyboard,
    TextInput,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Modal
} from 'react-native';
import {useNavigation} from "@react-navigation/native";

import ShelfImage from '../../resource/img/books_128.png';

const styleShelves = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        paddingBottom: 90,
        marginHorizontal: 16
    },
    item: {
        padding: 5,
        fontSize: 32,
        height: 60,
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
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

function ShelfScreen( props ) {
    /**
     * Man hinh cua Tab Shelves o Home.
     * @param navigation Dieu huong man hinh
     * @returns {JSX.Element} Giao dien man hinh + cac xu li chuyen man hinh
     * @constructor
     */

    const navigation = useNavigation()
    const [selectedId, setSelectedId] = useState(null);  // ID của view item (shelf) đang focus hiện tại - bằng thao tác Press
    const [shelfId, setShelfId] = useState();  // Quản lý Id của (chỉ một) Shelf cần bị xóa hoăc Đổi tên - khi LongPress
    const [shelfName, setShelfName] = useState();  // Quản lý tên (chỉ một) Shelf cần được thêm vào hoặc đổi tên
    const [shelfList, setShelfList] = useState([  // Danh sách đối tượng Shelf hiện tại (không phải View)
            {id: 0, name: 'Toán học'},
            {id: 1, name: 'Vật lý'},
            {id: 2, name: 'Truyện ngắn'},
            {id: 3, name: 'Công nghệ'},
            {id: 4, name: 'Toán học'},
            {id: 5, name: 'Vật lý'},
            {id: 6, name: 'Truyện ngắn'},
            {id: 7, name: 'Công nghệ'},
        ]
    );
    //const [shelfQuantity, setShelfQuantity] = React. useState();  // Quản lý số lượng shelf hiện tại
    useEffect(() => {
        let title = (shelfList.length <= 1 ? (" (" + shelfList.length + " shelf)") : " (" + shelfList.length + " shelves)");
        if (navigation.isFocused()) {
            props.onCurrentIndexListener(1);
            props.onQuantityListener(title);
        }
    })

    const [visible, setVisible] = useState(false);  // Quyết định ẩn / hiện Custom dialog (Cancel-Rename-Delete)
    const [renamePress, setRename] = useState(false);  // biến đếm số lần ấn vào button "Rename"
    const [deletePress, setDelete] = useState(false);  // biến đếm số lần ấn vào button "Delete"

    return (
        <SafeAreaView style={styleShelves.container}>
            <FlatList
                data={shelfList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
            />

            <Modal visible={visible} transparent={true}>
                <View
                    style={{
                        paddingTop: 20,
                        marginTop: 200,
                        flexDirection: "column",
                        height: '40%',
                        width: '80%',
                        alignSelf: 'center',
                        alignItems:'center',
                        backgroundColor: 'green',
                    }}>
                    <Text style={{height: 60, width: 250,
                        paddingLeft: 10,paddingTop: 20, backgroundColor: 'blue'}}>{titleDialog()}
                    </Text>
                    <TextInput
                        style={{paddingTop: 20, marginTop: 20,height: 60, width: 300,backgroundColor: (renamePress ? 'red' : 'green')}}
                        editable={renamePress}
                        onChangeText={setShelfName}
                        placeholder={(renamePress ? 'Nhap ten shelf moi vao day' : '')}
                    />
                    <ButtonsConfirm/>
                </View>
            </Modal>
        </SafeAreaView >
    );

    function titleDialog() {
        if (renamePress) return "Ban hay nhap ten gia sach vao o ben duoi :";
        else if (deletePress) return "Ban hay xac nhan chac chan Xoa gia sach ?";
        else return "Ban muon Doi ten hay Xoa gia sach ?";
    }

    function onClose () {
        setVisible(false);
        setRename(false);
        setDelete(false);
    }

    function ButtonsConfirm() {
        return (
            <View style={{paddingTop: 20, flexDirection: 'row', alignSelf: 'center' }}>
                <TouchableOpacity  // button "Cancel"
                    onPress={onClose} >
                    <View style={{width: 80, height: 40, marginRight: 10, backgroundColor: 'yellow', }}>
                        <Text>CANCEL</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity  // button "Rename"
                    disabled={deletePress}
                    onPress={() => {
                        console.log("Rename Button : " + renamePress);
                        console.log("shelfId : " + shelfId);
                        if (!renamePress) {
                            setRename(true);
                        } else {
                            RenameItem(shelfId);
                            onClose();
                        }
                    }} >
                    <View style={{width: 80, height: 40, marginRight: 10, backgroundColor: (deletePress ? 'green' : 'yellow')}}>
                        <Text style={{color: (deletePress ? 'green' : 'black')}}>{renamePress ? "OK" : "RENAME"}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity  // button "Delete"
                    disabled={renamePress}
                    onPress={() => {
                        console.log("Delete Button : " + deletePress);
                        console.log("shelfId : " + shelfId);
                        if (!deletePress) {
                            setDelete(true);
                        } else {
                            DeleteItem(shelfId);
                            onClose();
                        }
                    }} >
                    <View style={{width: 80, height: 40, marginRight: 10, backgroundColor: (renamePress ? 'green' : 'yellow')}}>
                        <Text style={{color: (renamePress ? 'green' : 'black')}}>{deletePress ? "OK" : "DELETE"}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    function renderItem({ item }) {
        const backgroundColor = item.id === selectedId ? "#ff0000" : "#ff00ff";
//    const color = item.id === selectedId ? 'white' : 'black';
        return (
            <ItemShelf
                itemId={item.id}
                itemName={item.name}
                onPress={() => {
                        setSelectedId(item.id);
                        navigation.navigate('ShelfDetails');
                    }
                }
                backgroundColor={{ backgroundColor }}
                //        textColor={{ color }}
            />
        );
    }

    function ItemShelf({itemId, itemName, onPress, backgroundColor}) {
        return (
            <TouchableOpacity
                onPress={onPress}
                onLongPress={() => {
                        setVisible(true);  // Show Confirm dialog gom 3 button : Cancel - Remove - Delete
                        setShelfId(itemId);  // Danh dau index cua item vua Long Press
                    }
                }
                style={[styleShelves.item, backgroundColor]}
                activeOpacity={0.5} >
                <View style={styleShelves.item}>
                    <View style={styleShelves.itemLeft}>
                        <Image source={ShelfImage}/>
                        <Text style={styleShelves.itemText}>{itemName}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    function handleAddShelf() {
        //Keyboard.dismiss();
        console.log("shelfList len: ", shelfList.length);
        setShelfList([...shelfList, {id: shelfList.length, name: shelfName}])
        console.log("shelfList: ", shelfList);
        setShelfName(null);
    }

    function DeleteItem (index) {
        console.log("index = ", index);
        let itemsCopy = [...shelfList];
        console.log("itemsCopy 1: ", itemsCopy);
        itemsCopy.splice(index, 1);
        console.log("itemsCopy 2: ", itemsCopy);

        const RearrangeIndex = (item) => {
            return (
                item.id < index ? item : {id: item.id-1, name: item.name}
            );
        }

        setShelfList(itemsCopy.map(RearrangeIndex));
        console.log("shelfList: ", shelfList);
    }

    function RenameItem (index) {
        console.log("index = ", index);
        console.log("shelfName = ", shelfName);
        let itemsCopy = [...shelfList];
        console.log("itemsCopy 1: ", itemsCopy);

        const RearrangeIndex = (item) => {
            return (
                item.id !== index ? item : {id: item.id, name: shelfName}
            );
        }

        setShelfList(itemsCopy.map(RearrangeIndex));
        console.log("shelfList: ", shelfList);
    }
}

export default ShelfScreen;
