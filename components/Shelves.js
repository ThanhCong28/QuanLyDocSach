import React, {useState} from 'react';
import { Image, View, Text, StyleSheet, FlatList, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import ShelfImage from '../assets/books_128.png';

const styleShelves = StyleSheet.create({
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
    square: {
      width: 24,
      height: 24,
      backgroundColor: "#ff0000",
      opacity: 0.4,
      borderRadius: 5,
      marginRight: 15,
    },
    itemText: {
      maxWidth: '80%',
    },
});

const dataShelf = [
      {
        id: 1,
        name: "Toán học",
      },
      {
        id: 2,
        name: "Kinh tế",
      },
      {
        id: 3,
        name: "English",
      },
      {
        id: 4,
        name: "Truyện cười",
      },
      {
        id: 5,
        name: "Tản văn",
      },
      {
        id: 6,
        name: "Công nghệ",
      },
      {
        id: 7,
        name: "Vật Lý",
      },
      {
        id: 8,
        name: "Khoa học",
      },
      {
        id: 9,
        name: "Truyện cười",
      },
      {
        id: 10,
        name: "Giáo dục",
      },
    ];

const ItemShelf = ({keyItem, quantity, onPress, backgroundColor}) => (
    <TouchableOpacity onPress={onPress} style={[styleShelves.item, backgroundColor]}>
    <View style={styleShelves.item}>
      <View style={styleShelves.itemLeft}>
          <Image source={ShelfImage}/>
          <Text style={styleShelves.itemText}>{keyItem} ({quantity})</Text>
      </View>
    </View>
    </TouchableOpacity>
  );

const Shelves = ({quantity}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#ff0000" : "#ff00ff";
//    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <ItemShelf
        keyItem={item.name}
        quantity={quantity}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
//        textColor={{ color }}
      />
    );
  };
  return (
    <SafeAreaView style={styleShelves.container}>
      <FlatList
        data={dataShelf}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView >
  );
}

export default Shelves;