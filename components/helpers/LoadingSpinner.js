import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native';

const LoadingSpinner = ({ title, onlySpinner}) => {
    return (
        <View>
            <ActivityIndicator size="large" color="#B84CF7" />
            {!onlySpinner && <Text>{title}</Text>}
        </View>
    );
}

export default LoadingSpinner