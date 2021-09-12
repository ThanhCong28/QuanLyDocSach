/**
 * Ung dung Quan ly Doc sach
 * https://github.com/ThanhCong28/QuanLyDocSach.git
 *
 * Copyright: Nguyen Thanh Cong - 2021
 */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeHeader from './screens/home/HomeHeader';
import BookScreen from './screens/home/BookScreen';
import ShelfScreen from './screens/home/ShelfScreen';
import SettingScreen from './screens/home/SettingScreen';
import BookDetailScreen from './screens/detail/BookDetailScreen';
import ShelfDetailScreen from "./screens/detail/ShelfDetailScreen";
import AddBookScreen from "./screens/detail/AddBookScreen";
import ShelfDetailScreenHeader from "./screens/detail/ShelfDetailScreenHeader";

const RootStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function App() {
    /**
     * Ham Main: Thiet ke app o dang Stack Navigator,
     * vi ngoai cai Tab navigator o man hinh chinh, thi cac man hinh con lai deu de Full.
     * @returns {JSX.Element}
     * @constructor
     */

    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="HomeStackApp" >
                <RootStack.Screen name="HomeTab" component={HomeTabNavigator} />
                <RootStack.Screen name="BookDetails" component={BookDetailScreen} />
                <RootStack.Screen name="ShelfDetails" component={ShelfDetailScreen} options={{ headerTitle: () => <ShelfDetailScreenHeader/>}} />
                <RootStack.Screen name="AddBook" component={AddBookScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );

    function HomeTabNavigator({ navigation, route }) {
        /**
         * TabNavigator o Home, gom 3 Tab: Books, Shelves, Settings
         * @returns {JSX.Element}
         * @constructor
         */

        const [currTabIndex, setCurrTabIndex] = useState(0);  // bien luu index cua 3 tab tren Home (0, 1, 2)
        const [header, setHeader] = useState('');  // bien luu title o Home

        function BookScreenWithListener() {
            console.log("HomeTabNavigator at BookScreen bf: " + currTabIndex);
            let NewScreen = <BookScreen onCurrentIndexListener={setCurrTabIndex} onQuantityListener={setHeader}/>;
            navigation.setOptions({
                headerTitle: () => {
                    console.log("HomeTabNavigator at BookScreen af: " + currTabIndex);
                    return (<HomeHeader currentTabIndex={currTabIndex} headerTitle={"Book manager" + header}/>)
                }
            });
            return NewScreen;
        }

        function ShelfScreenWithListener() {
            console.log("HomeTabNavigato at ShelfScreen bf: " + currTabIndex);
            let NewScreen = <ShelfScreen onCurrentIndexListener={setCurrTabIndex} onQuantityListener={setHeader}/>;
            navigation.setOptions({
                headerTitle: () => {
                    console.log("HomeTabNavigator at ShelfScreen af: " + currTabIndex);
                    return (<HomeHeader currentTabIndex={currTabIndex} headerTitle={"Book manager" + header}/>)
                }
            });
            return NewScreen;
        }

        function SettingScreenWithListener() {
            console.log("HomeTabNavigator at SettingScreen bf: " + currTabIndex);
            let NewScreen = <SettingScreen onCurrentIndexListener={setCurrTabIndex} onQuantityListener={setHeader}/>;
            navigation.setOptions({
                headerTitle: () => {
                    console.log("HomeTabNavigator at SettingScreen af: " + currTabIndex);
                    return (<HomeHeader currentTabIndex={currTabIndex} headerTitle={"Book manager" + header}/>)
                }
            });
            return NewScreen;
        }

        return (
            <Tab.Navigator>
                <Tab.Screen name="Books" component={BookScreenWithListener} />
                <Tab.Screen name="Shelves" component={ShelfScreenWithListener} />
                <Tab.Screen name="Settings" component={SettingScreenWithListener} />
            </Tab.Navigator>
        );
    }
}

export default App;
