/**
 * Ung dung Quan ly Doc sach
 * https://github.com/ThanhCong28/QuanLyDocSach.git
 *
 * Copyright: Nguyen Thanh Cong - 2021
 */
import * as React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

const styleSettings = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
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
        maxWidth: '100%',
    },
});

const dataSettings = [
    {
        id: 1,
        name: "About",
    },
    {
        id: 2,
        name: "Ngôn ngữ",
    },
    {
        id: 3,
        name: "Import - Export",
    },
    {
        id: 4,
        name: "Thống kê",
    },
];

function SettingScreen() {
    /**
     * Man hinh cua Tab Settings o Home.
     * @returns {JSX.Element} Giao dien man hinh + cac xu li chuyen man hinh
     * @constructor
     */
    const [selectedId, setSelectedId] = React.useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#00ffff" : "#ff00ff";
        return (
            <ItemSettings
                keyItem={item.name}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
            />
        );
    };
    return (
        <SafeAreaView style={styleSettings.container}>
            <FlatList
                data={dataSettings}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
            />
        </SafeAreaView >
    );
}

function ItemSettings ({keyItem, onPress, backgroundColor}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styleSettings.item, backgroundColor]}
            activeOpacity={0.5}>
            <View style={styleSettings.item}>
                <View style={styleSettings.itemLeft}>
                    <Text style={styleSettings.itemText}>{keyItem}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default SettingScreen;
