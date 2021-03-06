/**
 * Ung dung Quan ly Doc sach
 * https://github.com/ThanhCong28/QuanLyDocSach.git
 *
 * Copyright: Nguyen Thanh Cong - 2021
 */
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeHeader from './screens/home/HomeHeader';
import BookScreen from './screens/home/BookScreen';
import ShelfScreen from './screens/home/ShelfScreen';
import SettingScreen from './screens/home/SettingScreen';
import AddBookScreen from "./screens/detail/AddBookScreen";
import BookDetailScreen from './screens/detail/BookDetailScreen';
import ShelfDetailScreen from "./screens/detail/ShelfDetailScreen";
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
                <RootStack.Screen name="AddBook" component={AddBookScreen}/>
                <RootStack.Screen name="BookDetails" component={BookDetailScreen} />
                <RootStack.Screen name="ShelfDetails" component={ShelfDetailScreen} options={{ headerTitle: () => <ShelfDetailScreenHeader/>}} />
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

        // Set l???i header t????ng ???ng v???i Tab ??ang focus
        useEffect(() => {
            console.log("HomeTabNavigator, index at setOptions : " + currTabIndex + ", with quantity : " + header);
            navigation.setOptions({
                headerTitle: () => {
                    return (<HomeHeader currentTabIndex={currTabIndex} headerTitle={"Book manager" + header}/>)
                }
            })}
        )

        function BookScreenWithListener() {
            console.log("HomeTabNavigator, index at BookScreen : " + currTabIndex + ", with quantity : " + header);
            // G???i callback v??? Tab "Books" ????? c???p nh???t tab index hi???n t???i (0) c??ng nh?? title tr??n header
            return <BookScreen onCurrentIndexListener={setCurrTabIndex} onQuantityListener={setHeader}/>;
        }

        function ShelfScreenWithListener() {
            console.log("HomeTabNavigator, index at ShelfScreen : " + currTabIndex + ", with quantity : " + header);
            // G???i callback v??? Tab "Shelves" ????? c???p nh???t tab index hi???n t???i (1) c??ng nh?? title tr??n header
            return <ShelfScreen onCurrentIndexListener={setCurrTabIndex} onQuantityListener={setHeader}/>;
        }

        function SettingScreenWithListener() {
            console.log("HomeTabNavigator, index at SettingScreen : " + currTabIndex + ", with quantity : " + header);
            // G???i callback v??? Tab "Settings" ????? c???p nh???t tab index hi???n t???i (2) c??ng nh?? title tr??n header
            return <SettingScreen onCurrentIndexListener={setCurrTabIndex} onQuantityListener={setHeader}/>;
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
