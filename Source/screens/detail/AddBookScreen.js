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
import CustomDropDownPicker from "../common/DropDown";
import CustomProgressBar from "../common/ProgressBar";

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
        bookProgress: 0,
        bookStatus: 'New',
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

    function setBookTitle (title) {
        setBookItem({...bookItem, bookTitle: title})
    }

    function setBookAuthor (author) {
        setBookItem({...bookItem, bookAuthor: author})
    }

    function setBookIssueDate (issueDate) {
        setBookItem({...bookItem, bookIssueDate: issueDate})
    }

    function setBookShelf (shelf) {
        setBookItem({...bookItem, bookShelf: shelf})
    }

    function setBookProgress (progress) {
        setBookItem({...bookItem, bookProgress: progress})
    }

    function setBookStatus (status) {
        setBookItem({...bookItem, bookStatus: status})
    }

    function setBookStartDate (startDate) {
        setBookItem({...bookItem, bookStartDate: startDate})
    }

    function setBookEndDate (endDate) {
        setBookItem({...bookItem, bookEndDate: endDate})
    }

    function setBookNotes (notes) {
        setBookItem({...bookItem, bookNotes: notes})
    }

    function setBookCover (cover) {
        setBookItem({...bookItem, bookCover: cover})
    }

    return (
        <ScrollView>
            {/*Title*/}
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 2, alignItems: 'flex-start',backgroundColor: 'red'}}>
                <Text style={{height: 60, width: 100,paddingLeft:5,paddingTop: 20,alignContent: 'center',backgroundColor: "#00ffff"}}>(*) Title</Text>
                <TextInput
                    style={{height: 60, width: 300, paddingLeft:10, backgroundColor: "#ffff00"}}
                    onChangeText={setBookTitle}
                    placeholder={'Enter here'}
                />
            </View>
            {/*Author*/}
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 2, alignItems: 'flex-start',backgroundColor: 'red'}}>
                <Text style={{height: 60, width: 100,paddingLeft:5,paddingTop: 20,alignContent: 'center',backgroundColor: "#00ffff"}}>(*) Author</Text>
                <TextInput
                    style={{height: 60, width: 300,paddingLeft:10, backgroundColor: "#ffff00"}}
                    onChangeText={setBookAuthor}
                    placeholder={'Enter here'}
                />
            </View>
            {/*Issue date*/}
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 2, alignItems: 'flex-start',backgroundColor: 'red'}}>
                <Text style={{height: 60, width: 100,paddingLeft:5,paddingTop: 20,alignContent: 'center',backgroundColor: "#00ffff"}}>Issue date</Text>
                <CustomDateTimePicker onDateTimeListener={setBookIssueDate}/>
            </View>
            {/*Shelf*/}
            <View style={{ flexDirection: 'row', paddingTop: 2, alignItems: 'flex-start',backgroundColor: 'red'}}>
                <Text style={{height: 60, width: 100,paddingLeft:5,paddingTop: 20,alignContent: 'center',backgroundColor: "#00ffff"}}>(*) Shelf</Text>
                <CustomDropDownPicker onDropDownListener={setBookShelf}/>
                <View style={{height: 60, width: 110,backgroundColor: "#ffff00"}}><Text/></View>
            </View>
            {/*Progress*/}
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 2, alignItems: 'flex-start',backgroundColor: 'red'}}>
                <Text style={{height: 60, width: 100,paddingLeft:5,paddingTop: 20,alignContent: 'center',backgroundColor: "#00ffff"}}>Progress</Text>
                <CustomProgressBar onProgressBarListener={setBookProgress}/>
            </View>
            {/*Status*/}
            <View style={{ flexDirection: 'row', paddingTop: 2, alignItems: 'flex-start',backgroundColor: 'red'}}>
                <Text style={{height: 60, width: 100,paddingLeft:5,paddingTop: 20,alignContent: 'center',backgroundColor: "#00ffff"}}>Status</Text>
                <CustomDropDownPicker onDropDownListener={setBookStatus}/>
                <View style={{height: 60, width: 110,backgroundColor: "#ffff00"}}><Text/></View>
            </View>
            {/*Start date*/}
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 2, alignItems: 'flex-start',backgroundColor: 'red'}}>
                <Text style={{height: 60, width: 100,paddingLeft:5,paddingTop: 20,alignContent: 'center',backgroundColor: "#00ffff"}}>Start date</Text>
                <CustomDateTimePicker onDateTimeListener={setBookStartDate}/>
            </View>
            {/*End date*/}
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 2, alignItems: 'flex-start',backgroundColor: 'red'}}>
                <Text style={{height: 60, width: 100,paddingLeft:5,paddingTop: 20,alignContent: 'center',backgroundColor: "#00ffff"}}>End date</Text>
                <CustomDateTimePicker onDateTimeListener={setBookEndDate}/>
            </View>
            {/*Notes*/}
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 2, alignItems: 'flex-start',backgroundColor: 'red'}}>
                <Text style={{height: 60, width: 100,paddingLeft:5,paddingTop: 20,alignContent: 'center',backgroundColor: "#00ffff"}}>Notes</Text>
                <TextInput
                    style={{height: 60, width: 300,paddingLeft:10, backgroundColor: "#ffff00"}}
                    onChangeText={setBookNotes}
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
