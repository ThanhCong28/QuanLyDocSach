import React, {useState} from 'react';
import { Image, View, Text, StyleSheet, FlatList, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';

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

const ItemSettings = ({keyItem, onPress, backgroundColor}) => (
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

const Settings = ({quantity}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#00ffff" : "#ff00ff";
//    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <ItemSettings
        keyItem={item.name}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
//        textColor={{ color }}
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

export default Settings;