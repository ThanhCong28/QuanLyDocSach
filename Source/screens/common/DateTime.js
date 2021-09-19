/**
 * Ung dung Quan ly Doc sach
 * https://github.com/ThanhCong28/QuanLyDocSach.git
 *
 * Copyright: Nguyen Thanh Cong - 2021
 */
import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CalendarIcon from "../../resource/img/calendar.png";

function CustomDateTimePicker (props) {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        props.onDateTimeListener(currentDate);
    };

    return (
        <View>
            <View style={{height: 60, width: 300,backgroundColor: "#ffff00"}}>
                <TouchableOpacity
                    style={{paddingTop: 15, flexDirection: "row"}}
                    onPress={() => setShow(true)} >
                    <Text style={{marginLeft: 5, fontSize: 18, color:"#000000",
                        paddingLeft: 5, paddingRight: 20, paddingTop: 5 }}>{date.toDateString()}
                    </Text>
                    <Image source={CalendarIcon}/>
                </TouchableOpacity>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode='date'
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
}

export default CustomDateTimePicker;
