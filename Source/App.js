/**
 * Ung dung Quan ly Doc sach
 * https://github.com/ThanhCong28/QuanLyDocSach.git
 *
 * Copyright: Nguyen Thanh Cong - 2021
 */
import 'react-native-gesture-handler';
import * as React from 'react';
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

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function App() {
    /**
     * Ham Main: Thiet ke app o dang Stack Navigator,
     * vi ngoai cai Tab navigator o man hinh chinh, thi cac man hinh con lai deu de Full.
     * @returns {JSX.Element}
     * @constructor
     */

    const [currTabIndex, setCurrTabIndex] = React.useState('');  // bien luu index cua 3 tab tren Home (0, 1, 2)

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeStackApp">
                <Stack.Screen name="HomeTab" component={HomeTabNavigator} options={{ headerTitle: () => <HomeHeader currentTabIndex={currTabIndex}/> }} />
                <Stack.Screen name="BookDetails" component={BookDetailScreen} />
                <Stack.Screen name="ShelfDetails" component={ShelfDetailScreen} options={{ headerTitle: () => <ShelfDetailScreenHeader/>}} />
                <Stack.Screen name="AddBook" component={AddBookScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );

    function HomeTabNavigator() {
        /**
         * TabNavigator o Home, gom 3 Tab: Books, Shelves, Settings
         * @returns {JSX.Element}
         * @constructor
         */
        return (
            <Tab.Navigator>
                <Tab.Screen name="Books" component={BookScreen} options={ ({navigation}) => setCurrentTabIndex(0, navigation)} />
                <Tab.Screen name="Shelves" component={ShelfScreen} options={ ({navigation}) => setCurrentTabIndex(1, navigation)} />
                <Tab.Screen name="Settings" component={SettingScreen} options={ ({navigation}) => setCurrentTabIndex(2, navigation)} />
            </Tab.Navigator>
        );

        function setCurrentTabIndex(index, navigation) {  // ham set lai index (vao bien currTabIndex) ung voi tab dang focus hien tai
            console.log("HomeTabNavigator : " + currTabIndex);
            if (navigation.isFocused()) setCurrTabIndex(index);
        }
    }
}

export default App;
