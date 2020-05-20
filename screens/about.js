import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import globalStyles from '../styles/global';

const About = () => {
    return (  
        <View style={globalStyles.container}>
            <Text>This React Native App is very Funny :)</Text>
            <Text>Author : Roman Chikhladze</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    
});
 
export default About;