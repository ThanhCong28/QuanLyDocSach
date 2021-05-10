/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import Shelves from './components/Shelves';
import Settings from './components/Settings';
import {
  SafeAreaView,
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { TabView, SceneMap } from 'react-native-tab-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
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

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#00ffff' }}>
  <Text>Welcome 1</Text>
  </View>
);

const SecondRoute = () => (
//  const [shelf, setShelf] = React.useState(0);

//  const handleAddShelf = () => {
//    console.log(shelf);
//  }
  <View style={{ flex: 1, backgroundColor: '#f9c2ff' }} >
    {/* Danh sách các Shelves */}
    <Shelves quantity='28'/>

    {/* Phần Tạo thêm một Shelf */}
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.addShelf}
    >
      <TextInput style={styles.input} placeholder={'Nhap ten Shelf'} />
      <TouchableOpacity>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  </View>
);

const ThirdRoute = () => (
//  <View style={{ flex: 1, backgroundColor: '#ff0000' }} >
    <Settings />
//  </View>
);

//export default function TabViewExample() {
const TabViewComponent = () => {
//function TabViewComponent() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Books' },
    { key: 'second', title: 'Shelves' },
    { key: 'third', title: 'Settings' }
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

//  const renderTabBar = props => (
//    <TabBar
////      {...props}
//      indicatorStyle={{ backgroundColor: 'white' }}
//      style={{ backgroundColor: 'pink' }}
//    />
//  );

  return (
      <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
//                    renderTabBar={renderTabBar}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                  />
  );
}

const AppQuanLySach = () => {
  return (
      <TabViewComponent />
    );
}

export default AppQuanLySach;