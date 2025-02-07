import React from "react";
import { styles } from "./styles/global";
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>
                    {props.text}
                </Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

export default Task;