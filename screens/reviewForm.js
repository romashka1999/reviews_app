import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import globalStyles  from '../styles/global';
import { Formik } from 'formik';

const ReviewForm = () => {
    return (  
        <View style={globalStyles.container}>
            <Text style={{...globalStyles.titleText, alignSelf: 'center', marginBottom: 10}}>Add Review</Text>
            <Formik
                initialValues={{title: '', body: '', rating: ''}}
                onSubmit={(values) => { console.log(values);}}>
                {
                    (formikProps) => (
                        <View>
                            <TextInput 
                                style={globalStyles.input}
                                placeholder='Reviw title'
                                onChangeText={formikProps.handleChange('title')}
                                value={formikProps.values.title}/>
                            <TextInput 
                                multiline
                                style={globalStyles.input}
                                placeholder='Reviw body'
                                onChangeText={formikProps.handleChange('body')}
                                value={formikProps.values.body}/>
                            <TextInput 
                                style={globalStyles.input}
                                placeholder='Reviw rating'
                                onChangeText={formikProps.handleChange('rating')}
                                value={formikProps.values.rating}
                                keyboardType='numeric'/>

                            <Button 
                                title='submit'
                                color='maroon'
                                onPress={formikProps.handleSubmit}
                                style={styles.addButton}/>
                        </View>
                    )
                }
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    addButton: {

    }
});

 
export default ReviewForm;