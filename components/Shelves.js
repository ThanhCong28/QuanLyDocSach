import React, {useState} from 'react';
import { Image, View, Text, StyleSheet, Keyboard, TextInput, FlatList, SafeAreaView, StatusBar, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import ShelfImage from '../assets/books_128.png';

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

const Shelves = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [shelf, setShelf] = useState();
  const [dataShelf, setDataShelf] = useState([]);

    const handleAddShelf = () => {
        Keyboard.dismiss();
        console.log("dataShelf len: ", dataShelf.length);
        setDataShelf([...dataShelf, {id: dataShelf.length, name: shelf}])
        console.log("dataShelf: ", dataShelf);
        setShelf(null);
      }

    const DeleteItem = (index) => {
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

    const ConfirmDeleteItemAlert = (index) => {
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

  const ItemShelf = ({itemId, itemName, onPress, backgroundColor}) => (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={() => ConfirmDeleteItemAlert(itemId)}
      style={[styleShelves.item, backgroundColor]}
      activeOpacity={0.5}
      >
    <View style={styleShelves.item}>
      <View style={styleShelves.itemLeft}>
          <Image source={ShelfImage}/>
          <Text style={styleShelves.itemText}>{itemName}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#ff0000" : "#ff00ff";
//    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <ItemShelf
        itemId={item.id}
        itemName={item.name}
        onPress={() => setSelectedId(item.id) }
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
      <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styleShelves.addShelf}
              >
                <TextInput style={styleShelves.input}
                placeholder={'Nhap ten Shelf'}
                value={shelf} onChangeText={text => setShelf(text)}/>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleAddShelf()}
                  >
                  <View style={styleShelves.addWrapper}>
                    <Text style={styleShelves.addText}>+</Text>
                  </View>
                </TouchableOpacity>
              </KeyboardAvoidingView>
    </SafeAreaView >

  );
}

export default Shelves;