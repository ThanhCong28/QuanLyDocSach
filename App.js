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
});

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#00ffff' }}>
  <Text>Welcome 1</Text>
  </View>
);

const SecondRoute = () => (

  <View style={{ flex: 1, backgroundColor: '#f9c2ff' }} >
    <Shelves />
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