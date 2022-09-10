import { StyleSheet } from 'react-native';
import { COLORS } from '../../../colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.customBlack,
    },
    backgroundImage: {
        width: '100%',
        flex: 1,
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center',
        paddingHorizontal: 30,
        marginBottom: 10
    },
    subtitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        opacity: 0.5,
        paddingHorizontal: 30,
    },
    sliderContainer: {
        margin: 8,
        marginVertical: 80,
        backgroundColor: COLORS.primaryGrey,
        borderRadius: 45,
        overflow: 'hidden',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 100,
        marginHorizontal: 10,
    },
    sliderElement: {
        width: 80,
        margin: 10,
        borderRadius: 40,
        height: 80,
        backgroundColor: 'white'
    },
    sliderText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 20,
        marginLeft: 30
    },
    sliderElementIcon: {
        marginTop: 30,
        marginLeft: 5
    }
})
