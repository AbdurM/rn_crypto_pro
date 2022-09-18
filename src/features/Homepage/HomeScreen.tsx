import { View, Text, FlatList } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./styles";
import { Icon } from 'react-native-elements';
import { TotalProgress } from "./components/TotalProgress";
import { UserActionListItem } from "./components/UserActionListItem";
import { UseHomeScreen } from './useHomeScreen';
import { COLORS } from "../../global/colors";
import { WishListItem } from "./components/WishListItem";

export const HomeScreen = () => {
    const { userActions, cryptoCurrencies } = UseHomeScreen();
    return (
        <LinearGradient
            colors={['rgba(0,0,0,0.8)', 'transparent']}
            style={styles.linearGradient}>
            <View>
                <View style={styles.innerContainer}>
                    <View style={styles.topView}>
                        <View style={styles.dp}>
                            <Text style={styles.dpText}>AM</Text>
                        </View>
                    </View>
                    <Text style={styles.amountText}>$12,345.03</Text>
                    <View style={styles.totalProgress}>
                        <Text>+5.25% </Text>
                        <Text>|</Text>
                        <Text> +642.26</Text>
                    </View>
                </View>
                <View style={styles.userActionsList}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={userActions}
                        renderItem={UserActionListItem} />
                </View>

                <View style={styles.wishSectionTitleContainer}>
                    <Text style={styles.wishListText}>My wishlist</Text>
                    <Text style={styles.seeAllText}>See all</Text>
                </View>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={cryptoCurrencies}
                    renderItem={WishListItem}
                />


            </View>
        </LinearGradient >
    );
}