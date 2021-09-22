/**
 * Ung dung Quan ly Doc sach
 * https://github.com/ThanhCong28/QuanLyDocSach.git
 *
 * Copyright: Nguyen Thanh Cong - 2021
 */
import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from "@react-navigation/native";

function AddBookScreenHeader(props) {
    /**
     * Header cua Man hinh Them sach.
     * @returns {JSX.Element} Chi tiet thong tin
     * @constructor
     */
    const navigation = useNavigation();
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Text style={{fontSize: 22}}>Add new book</Text>
            <Button
                title="OK"
                onPress={() => {
                    console.log("bookTitle : " + props.bookItem.bookTitle);
                    console.log("bookAuthor : " + props.bookItem.bookAuthor);
                    console.log("bookIssueDate : " + props.bookItem.bookIssueDate);
                    console.log("bookShelf : " + props.bookItem.bookShelf);
                    console.log("bookProgress : " + props.bookItem.bookProgress);
                    console.log("bookStatus : " + props.bookItem.bookStatus);
                    console.log("bookStartDate : " + props.bookItem.bookStartDate);
                    console.log("bookEndDate : " + props.bookItem.bookEndDate);
                    console.log("bookNotes : " + props.bookItem.bookNotes);
                    console.log("bookCover : " + props.bookItem.bookCover);
                    navigation.goBack();
                }}
            />
            <Button
                title="CANCEL"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

export default AddBookScreenHeader;
