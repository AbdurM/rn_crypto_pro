import { View, Text } from "react-native";
import { styles } from "../styles";
import { Icon } from 'react-native-elements';
import React from "react";

export const UserActionListItem = ({ item }) => {
    return (
        <View style={styles.userActionListItemContainer}>
            <View style={styles.userActionListItemInnerContainer}>
                <Icon
                    name={item.iconType}
                    color='black'
                    size={16}
                    style={{ marginTop: 30 }}
                    tvParallaxProperties={undefined} />
            </View>
            <Text style={styles.userActionListItemText}>{item.name}</Text>
        </View>);
}