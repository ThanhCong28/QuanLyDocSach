/**
 * Ung dung Quan ly Doc sach
 * https://github.com/ThanhCong28/QuanLyDocSach.git
 *
 * Copyright: Nguyen Thanh Cong - 2021
 */
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import * as Progress from 'react-native-progress';

function CustomProgressBar(props) {
    const [ratio, setRatio] = useState(0);

    function LeftProgressValue() {
        if (ratio >= 0.5) return 1;
        else return ratio * 2;
    }

    function RightProgressValue() {
        if (ratio < 0.5) return 0;
        else return ratio * 2 - 1;
    }

    function LeftProgressOnclick() {
        if (ratio >= 0.25) {
            setRatio(ratio-0.25)
            props.onProgressBarListener(ratio-0.25);
        }
    }

    function RightProgressOnclick() {
        if (ratio <= 0.75) {
            setRatio(ratio+0.25)
            props.onProgressBarListener(ratio+0.25);
        }
    }

    return (
        <View style={{flexDirection: 'row',}}>
            <TouchableOpacity
                style={{paddingTop: 5}}
                onPress={LeftProgressOnclick} >
                <Progress.Bar
                    progress={LeftProgressValue()}
                    width={100}
                    height={50}
                    borderRadius={0}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={{paddingTop: 5,}}
                onPress={RightProgressOnclick} >
                <Progress.Bar
                    progress={RightProgressValue()}
                    width={100}
                    height={50}
                    borderRadius={0}
                />
            </TouchableOpacity>
            <Text style={{paddingTop:10, paddingLeft:20, fontSize:30}}>{ratio*100}%</Text>
        </View>
    )
}

export default CustomProgressBar;
