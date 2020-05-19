import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import globalStyles from '../styles/global';
import Card from '../shared/card';

const Home = (props) => {

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: 1 },
        { title: 'Gotta catch Them All(again)', rating: 4, body: 'lorem ipsum', key: 2 },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: 3 },
    ]);

    return (  
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => props.navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}/>
        </View>
    );
}

const styles = StyleSheet.create({
    
});
 
export default Home;