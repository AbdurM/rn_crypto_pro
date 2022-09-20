import { StyleSheet } from "react-native";
import { COLORS } from "../../global/colors";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.customBlack
    },
    innerContainer: {
        marginTop: 70,
        marginLeft: 25

    },
    topView: {
        flexDirection: 'row'
    },
    dp: {
        backgroundColor: COLORS.customOrange,
        height: 60,
        width: 60,
        borderRadius: 20,
        justifyContent: 'center',
        alignSelf: 'flex-start'
    },
    dpText: {
        color: 'black',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 17
    },
    amountText: {
        color: 'white',
        alignSelf: 'center',
        marginTop: 30,
        fontSize: 45,
        fontWeight: 'bold'
    },

    totalProgress: {
        height: 30,
        width: 150,
        borderRadius: 30,
        backgroundColor: COLORS.customGreen,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 7,
    },
    userActionListItemContainer: {
        marginLeft: 20,
        marginTop: 30,
        height: 100,
        width: 70,
    },
    userActionListItemInnerContainer: {
        height: 70,
        width: 70,
        borderRadius: 25,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    userActionsList: {
        marginTop: 30,
    },
    userActionListItemText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 7,
        fontWeight: '500'

    },
    wishSectionTitleContainer: {
        marginHorizontal: 25,
        marginTop: 25,
        marginBottom: 20,
        flexDirection: 'row',
    },
    wishListText: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
    },
    seeAllText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right',
        flex: 1,
        alignSelf: 'flex-end'
    },
    wishListContainer: { height: '50%' },
    wishItemContainer: {
        backgroundColor: COLORS.primaryGrey,
        height: 95,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 25,
        alignContent: 'center',
        padding: 25,
        flexDirection: 'row',
        marginTop: 10
    },
    wishItemTitleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    wishItemSubtitleText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 13,
        opacity: 0.5,
        marginTop: 8
    },
    wishItemRightContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    wishItemPriceText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    wishItemPricePercentile: {
        fontWeight: '600',
        fontSize: 13,
        marginTop: 8,
    },
});
