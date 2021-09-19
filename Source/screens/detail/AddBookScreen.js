/**
 * Ung dung Quan ly Doc sach
 * https://github.com/ThanhCong28/QuanLyDocSach.git
 *
 * Copyright: Nguyen Thanh Cong - 2021
 */
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TextInput} from "react-native-gesture-handler";

import AddBookScreenHeader from "./AddBookScreenHeader";
import CustomDateTimePicker from "../common/DateTime";

function AddBookScreen({navigation}) {
    /**
     * Man hinh chi tiet thong tin Them moi sach.
     * @returns {JSX.Element} Chi tiet thong tin
     * @constructor
     */

    const [bookItem, setBookItem] = useState({
        bookTitle: '',
        bookAuthor: '',
        bookIssueDate: '',
        bookShelf: '',
        bookProgress: '',
        bookStatus: '',
        bookStartDate: '',
        bookEndDate: '',
        bookNotes: '',
        bookCover: ''
    });

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => {
                return <AddBookScreenHeader bookItem={bookItem}/>
            }
        })
    })

    function setIssueDate (issueDate) {
        setBookItem({...bookItem, bookIssueDate: issueDate})
    }

    function setStartDate (startDate) {
        setBookItem({...bookItem, bookStartDate: startDate})
    }

    function setEndDate (endDate) {
        setBookItem({...bookItem, bookEndDate: endDate})
    }

    return (
        <ScrollView>
            {/*Title*/}
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 2, alignItems: 'flex-start',backgroundColor: 'red'}}>
                <Text style={{height: 60, width: 100,paddingLeft:5,paddingTop: 20,alignContent: 'center',backgroundColor: "#00ffff"}}>(*) Title</Text>
                <TextInput
                    style={{height: 60, width: 300, paddingLeft:10, backgroundColor: "#ffff00"}}
                    onChangeText={text => setBookItem({...bookItem, bookTitle: text})}
                    placeholder={'Enter here'}
                />
            </View>
            {/*Author*/}
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 2, alignItems: 'flex-start',backgroundColor: 'red'}}>
                <Text style={{height: 60, width: 100,paddingLeft:5,paddingTop: 20,alignContent: 'center',backgroundColor: "#00ffff"}}>(*) Author</Text>
                <TextInput
                    style={{height: 60, width: 300,paddingLeft:10, backgroundColor: "#ffff00"}}
                    onChangeText={text => setBookItem({...bookItem, bookAuthor: text})}
                    placeholder={'Enter here'}
                />
            </View>
            {/*Issue date*/}
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 2, alignItems: 'flex-start',backgroundColor: 'red'}}>
                <Text style={{height: 60, width: 100,paddingLeft:5,paddingTop: 20,alignContent: 'center',backgroundColor: "#00ffff"}}>Issue date</Text>
                <CustomDateTimePicker onDateTimeListener={setIssueDate}/>
            </View>
            {/*/!*Shelf*!/*/}
            {/*<View style={{ flex: 1, flexDirection: 'row', paddingTop: 2, alignItems: 'flex-start',backgroundColor: 'red'}}>*/}
            {/*    <Text style={{height: 60, width: 100,paddingLeft:5,paddingTop: 20,alignContent: 'center',backgroundColor: "#00ffff"}}>(*) Shelf</Text>*/}
            {/*    <TextInput*/}
            {/*        style={{height: 60, width: 300,backgroundColor: "#ffff00"}}*/}
            {/*        onChangeText={setBookTitle}*/}
            {/*        placeholder={'Enter here'}*/}
            {/*    />*/}
            {/*</View>*/}
            {/*/!*Progress*!/*/}
            {/*<View style={{ flex: 1, flexDirection: 'row', paddingTop: 2, alignItems: 'flex-start',backgroundColor: 'red'}}>*/}
            {/*    <Text style={{height: 60, width: 100,paddingLeft:5,paddingTop: 20,alignContent: 'center',backgroundColor: "#00ffff"}}>Progress</Text>*/}
            {/*    <TextInput*/}
            {/*        style={{height: 60, width: 300,backgroundColor: "#ffff00"}}*/}
            {/*        onChangeText={setBookTitle}*/}
            {/*        placeholder={'Enter here'}*/}
            {/*    />*/}
            {/*</View>*/}
            {/*/!*Status*!/*/}
            {/*<View style={{ flex: 1, flexDirection: 'row', paddingTop: 2, alignItems: 'flex-start',backgroundColor: 'red'}}>*/}
            {/*    <Text style={{height: 60, width: 100,paddingLeft:5,paddingTop: 20,alignContent: 'center',backgroundColor: "#00ffff"}}>Status</Text>*/}
            {/*    <TextInput*/}
            {/*        style={{height: 60, width: 300,backgroundColor: "#ffff00"}}*/}
            {/*        onChangeText={setBookTitle}*/}
            {/*        placeholder={'Enter here'}*/}
            {/*    />*/}
            {/*</View>*/}
            {/*Start date*/}
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 2, alignItems: 'flex-start',backgroundColor: 'red'}}>
                <Text style={{height: 60, width: 100,paddingLeft:5,paddingTop: 20,alignContent: 'center',backgroundColor: "#00ffff"}}>Start date</Text>
                <CustomDateTimePicker onDateTimeListener={setStartDate}/>
            </View>
            {/*End date*/}
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 2, alignItems: 'flex-start',backgroundColor: 'red'}}>
                <Text style={{height: 60, width: 100,paddingLeft:5,paddingTop: 20,alignContent: 'center',backgroundColor: "#00ffff"}}>End date</Text>
                <CustomDateTimePicker onDateTimeListener={setEndDate}/>
            </View>
            {/*Notes*/}
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 2, alignItems: 'flex-start',backgroundColor: 'red'}}>
                <Text style={{height: 60, width: 100,paddingLeft:5,paddingTop: 20,alignContent: 'center',backgroundColor: "#00ffff"}}>Notes</Text>
                <TextInput
                    style={{height: 60, width: 300,paddingLeft:10, backgroundColor: "#ffff00"}}
                    onChangeText={text => setBookItem({...bookItem, bookNotes: text})}
                    placeholder={'Enter here'}
                />
            </View>
            {/*/!*Cover*!/*/}
            {/*<View style={{ flex: 1, flexDirection: 'row', paddingTop: 2, alignItems: 'flex-start',backgroundColor: 'red'}}>*/}
            {/*    <Text style={{height: 60, width: 100,paddingLeft:5,paddingTop: 20,alignContent: 'center',backgroundColor: "#00ffff"}}> (*) Cover</Text>*/}
            {/*    <TextInput*/}
            {/*        style={{height: 60, width: 300,backgroundColor: "#ffff00"}}*/}
            {/*        onChangeText={setBookTitle}*/}
            {/*        placeholder={'Enter here'}*/}
            {/*    />*/}
            {/*</View>*/}
        </ScrollView>
  );
}

export default AddBookScreen;
