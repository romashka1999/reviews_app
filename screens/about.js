import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const About = () => {
    return (  
        <View style={styles.container}>
            <Text>About screen</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 24
    }
});
 
export default About;