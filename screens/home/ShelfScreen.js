/**
 * Ung dung Quan ly Doc sach
 * https://github.com/ThanhCong28/QuanLyDocSach.git
 *
 * Copyright: Nguyen Thanh Cong - 2021
 */
import * as React from 'react';
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
    Alert,
    Platform
} from 'react-native';

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

function ShelfScreen( {navigation} ) {
    /**
     * Man hinh cua Tab Shelves o Home.
     * @param navigation Dieu huong man hinh
     * @returns {JSX.Element} Giao dien man hinh + cac xu li chuyen man hinh
     * @constructor
     */

    const [selectedId, setSelectedId] = React.useState(null);
    const [shelf, setShelf] =React. useState();
    const [dataShelf, setDataShelf] = React.useState([
            {id: 0, name: 'Toán học'},
            {id: 1, name: 'Vật lý'},
            {id: 2, name: 'Truyện ngắn'},
            {id: 3, name: 'Công nghệ'},
        ]
    );

    return (
        <SafeAreaView style={styleShelves.container}>
            <FlatList
                data={dataShelf}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
            />
            {/*<KeyboardAvoidingView*/}
            {/*    behavior={Platform.OS === "ios" ? "padding" : "height"}*/}
            {/*    style={styleShelves.addShelf} >*/}
            {/*    <TextInput style={styleShelves.input}*/}
            {/*               placeholder={'Nhap ten Shelf'}*/}
            {/*               value={shelf} onChangeText={text => setShelf(text)}/>*/}
            {/*    <TouchableOpacity*/}
            {/*        activeOpacity={0.7}*/}
            {/*        onPress={() => handleAddShelf()} >*/}
            {/*        <View style={styleShelves.addWrapper}>*/}
            {/*            <Text style={styleShelves.addText}>+</Text>*/}
            {/*        </View>*/}
            {/*    </TouchableOpacity>*/}
            {/*</KeyboardAvoidingView>*/}
        </SafeAreaView >
    );

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
                onLongPress={() => ConfirmDeleteItemAlert(itemId)}
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

    function ConfirmDeleteItemAlert(index) {
        return (
            Alert.alert(
                "Xác nhận xóa",
                "Bạn có muốn xóa giá sách này không?",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel pressed")
                    },
                    {
                        text: "OK",
                        onPress: () => DeleteItem(index),
                    }
                ]
            )
        );
    }

    function handleAddShelf() {
        Keyboard.dismiss();
        console.log("dataShelf len: ", dataShelf.length);
        setDataShelf([...dataShelf, {id: dataShelf.length, name: shelf}])
        console.log("dataShelf: ", dataShelf);
        setShelf(null);
    }

    function DeleteItem (index) {
        console.log("index = ", index);
        let itemsCopy = [...dataShelf];
        console.log("itemsCopy 1: ", itemsCopy);
        itemsCopy.splice(index, 1);
        console.log("itemsCopy 2: ", itemsCopy);

        const RearrangeIndex = (item) => {
            return (
                item.id < index ? item : {id: item.id-1, name: item.name}
            );
        }

        setDataShelf(dataShelf => itemsCopy.map(RearrangeIndex));
        console.log("dataShelf: ", dataShelf);
    }
}

export default ShelfScreen;
