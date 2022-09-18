import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Slider from 'react-native-slide-to-unlock';
import { Icon } from 'react-native-elements';
import { styles } from './styles';

export const WelcomeScreen = ({ navigation }) => {

    return <View style={styles.container}>
        <Image source={require('../../../assets/welcomeBackground.png')} style={styles.backgroundImage} />
        <Text style={styles.title}>Build your Future</Text>
        <Text style={styles.subtitle}>Start investing today and your future will change for better</Text>
        <StatusBar style="auto" />
        <Slider
            onEndReached={() => {
                console.log('end reached');
                navigation.navigate('HomeScreen');
            }}
            containerStyle={styles.sliderContainer}
            sliderElement={
                <View style={styles.sliderElement}>
                    <Icon
                        name='chevron-right'
                        type='font-awesome'
                        color='black'
                        style={styles.sliderElementIcon}
                        tvParallaxProperties={undefined} />
                </View>
            }
        >
            <Text style={styles.sliderText}>{"Let's start  > > >"}</Text>
        </Slider >
    </View >

}