import { View, Text } from "react-native";
import { styles } from "../styles";
import React from "react";
import { Icon } from "react-native-elements";

export const UserActionListItem = ({ item }) => {
    return (
        <View style={styles.userActionListItemContainer}>
            <View style={styles.userActionListItemInnerContainer}>
                <Icon
                    name={item.iconType}
                    type='font-awesome'
                    color='black'
                    size={25}
                    tvParallaxProperties={undefined} />
            </View>
            <Text style={styles.userActionListItemText}>{item.name}</Text>
        </View>
    );
}