/**
 * Ung dung Quan ly Doc sach
 * https://github.com/ThanhCong28/QuanLyDocSach.git
 *
 * Copyright: Nguyen Thanh Cong - 2021
 */
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';

function CustomDropDownPicker (props) {
    const [selectedStatus, setSelectedStatus] = useState();
    const ItemList = [
        {label:"New", value:"New"},
        {label:"In progress", value:"In progress"},
        {label:"Done", value:"Done"},
    ]
    const onValueChange = (itemValue, itemIndex) => {
        setSelectedStatus(itemValue);
        props.onDropDownListener(itemValue);
    }

    function renderItem(item) {
        return (  // Thêm tham số "key" để phân biệt các phần tử trong list
            <Picker.Item key={item.label} label={item.label} value={item.value} />
        )
    }

    return (
        <Picker
            selectedValue={selectedStatus}
            onValueChange={onValueChange}
            mode='dropdown'
            dropdownIconRippleColor="#ff00ff"
            style={{ height: 60, width: 190, backgroundColor: "#ffff00" }}
        >
            {ItemList.map(renderItem)}
        </Picker>
    )
}

export default CustomDropDownPicker;
