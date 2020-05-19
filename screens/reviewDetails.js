import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import globalStyles from '../styles/global';

const ReviewDetails = (props) => {
    return (  
        <View style={globalStyles.container}>
            <Text>{props.navigation.getParam('title')}</Text>
            <Text>{props.navigation.getParam('body')}</Text>
            <Text>{props.navigation.getParam('rating')}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    
});
 
export default ReviewDetails;