import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import globalStyles from '../styles/global';
import Card from '../shared/card';

const ReviewDetails = (props) => {
    return (  
        <View style={globalStyles.container}>
            <Card>
                <Text>{props.navigation.getParam('title')}</Text>
                <Text>{props.navigation.getParam('body')}</Text>
                <Text>{props.navigation.getParam('rating')}</Text>
            </Card>
        </View>
    );
}


const styles = StyleSheet.create({
    
});
 
export default ReviewDetails;