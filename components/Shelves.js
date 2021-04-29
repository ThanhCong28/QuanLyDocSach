import React from 'react';
import { Image, View, Text, StyleSheet, FlatList } from 'react-native';
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

//<View style={styleShelves.square}>
//</View>

const Item = (props) => {
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
  return (
    <View style={styleShelves.container}>
      <FlatList
        data={[
          {key: 'Toán học'},
          {key: 'Kinh tế'},
          {key: 'English'},
          {key: 'Truyện cười'},
          {key: 'Tản văn'},
          {key: 'Công nghệ'},
        ]}
        renderItem={({item}) => <Item keyItem={item.key} quantity={props.quantity}/>}
      />
    </View>
  );
}

export default Shelves;