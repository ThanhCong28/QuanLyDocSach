import React from 'react';
import { Image, View, Text, StyleSheet, FlatList, Item } from 'react-native';
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
    backgroundColor: "#ff00ff",
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

const ItemShelf = (props) => {
  return (
    <View style={styleShelves.item}>
      <View style={styleShelves.itemLeft}>
          <Image source={ShelfImage}/>
          <Text style={styleShelves.itemText}>{props.keyItem} ({props.quantity})</Text>
      </View>
    </View>
  );
}

const Shelves = (props) => {
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
  return (
    <View style={styleShelves.container}>
      <FlatList
        data={dataShelf}
        renderItem={({ item }) => <Item name={item.name} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default Shelves;