import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import globalStyles, { images } from '../styles/global';
import Card from '../shared/card';

const ReviewDetails = (props) => {


    return (  
        <View style={globalStyles.container}>
            <Card>
                <Text>{props.navigation.getParam('title')}</Text>
                <Text>{props.navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>Gamezone Rating: </Text>
                    <Image source={images.ratings[props.navigation.getParam('rating')]} />
                </View>
            </Card>
        </View>
    );
}


const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 16,
        marginTop: 16,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#333'
    }
});
 
export default ReviewDetails;