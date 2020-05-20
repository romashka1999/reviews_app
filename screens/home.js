import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons }  from '@expo/vector-icons';

import globalStyles from '../styles/global';
import Card from '../shared/card';
import ReviewForm from './reviewForm';

const Home = (props) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: 1 },
        { title: 'Gotta catch Them All(again)', rating: 4, body: 'lorem ipsum', key: 2 },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: 3 },
    ]);

    const addReviewHandler = (review) => {
        review.key = Math.random().toString();
        setReviews((curReviews) => {
            return [review, ...curReviews];
        });
        setModalOpen(false);
    }   

    return (  
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
                    <View style={styles.modalContent}>
                        <MaterialIcons 
                            name="close" 
                            size={50} 
                            style={ {...styles.modalToggle, ...styles.modalClose} }
                            onPress={() => setModalOpen(false)}/>
                        <ReviewForm addReview={addReviewHandler}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons 
                name="add" 
                size={50} 
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}/>

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
    modalContent: {
        height: '100%',
        width: '100%',
        paddingHorizontal: 10,
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 2,
        borderColor: 'pink',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        color: 'pink',
    },
    modalClose: {
        marginVertical: 20
    }
});
 
export default Home;