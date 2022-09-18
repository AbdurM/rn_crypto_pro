import { View, Text } from "react-native";
import { styles } from "../styles";

export const WishListItem = ({ item }) => {
    return (<View style={styles.wishItemContainer}>
        <View>
            <Text style={styles.wishItemTitleText}>{item.name}</Text>
            <Text style={styles.wishItemSubtitleText}>{item.type}</Text>
        </View>
        <View style={styles.wishItemRightContainer}>
            <Text style={styles.wishItemTitleText}>{item.value}</Text>
            <Text style={styles.wishItemPricePercentile}>{item.difference}</Text>
        </View>
    </View>);
}