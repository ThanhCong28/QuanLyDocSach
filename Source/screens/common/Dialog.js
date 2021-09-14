/**
 * Ung dung Quan ly Doc sach
 * https://github.com/ThanhCong28/QuanLyDocSach.git
 *
 * Copyright: Nguyen Thanh Cong - 2021
 */
import {View, Text, TextInput, Button, Modal, Image, TouchableOpacity} from "react-native";
import WarningIcon from '../../resource/img/warning_icon.png';
import CloseIcon from '../../resource/img/close_icon.png';
import React from "react";

export function CustomConfirmDialog({visible, isWarning, title, content, btn1Name, btn2Name, onBtn1Click, onBtn2Click, onCloseClick}) {
    function CustomHeader() {
        if (isWarning) return (
            <View style={{height: 50, width: '100%', flexDirection: "row"}}>
                <Image source={WarningIcon}/>
                <Text style={{marginLeft: 5, fontSize: 25,
                    paddingLeft: 10, paddingRight: 110}}>{title}
                </Text>
                <TouchableOpacity  // button "Close"
                    onPress={onCloseClick} >
                    <Image source={CloseIcon}/>
                </TouchableOpacity>
            </View>
        );
        else return (
            <View style={{height: 50, width: '100%', flexDirection: "row"}}>
                <Text style={{marginLeft: 5, fontSize: 25,
                    paddingLeft: 10, paddingRight: 110}}>{title}
                </Text>
                <TouchableOpacity  // button "Close"
                    onPress={onCloseClick} >
                    <Image source={CloseIcon}/>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <Modal visible={visible} transparent={true}>
            <View
                style={{
                    paddingTop: 15,
                    paddingLeft: 15,
                    paddingRight: 15,
                    marginTop: 200,
                    flexDirection: "column",
                    height: '32%',
                    width: '80%',
                    alignSelf: 'center',
                    alignItems:'center',
                    backgroundColor: "#cccc00",
                }}>
                <CustomHeader/>
                <Text style={{height: 90, width: '100%', fontSize: 18, paddingTop:5, paddingLeft: 4, paddingRight: 4, backgroundColor: "#eeee00",}}>{content}
                </Text>
                {/*<ButtonsConfirm/>*/}
                <View style={{flexDirection: "row", width: '100%', marginTop:10, paddingLeft: 100, paddingRight: 100, justifyContent:"space-between"}}>
                    <Button title={btn1Name} onPress={onBtn1Click}/>
                    <Button title={btn2Name} onPress={onBtn2Click}/>
                </View>
            </View>
        </Modal>
    )
}

export function CustomInput() {

}
