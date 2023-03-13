import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { SongList } from './SongList';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#1E1E1E',
    },
});

export default function Library() {
    return (
        <View style={styles.root}>
            <SongList />
        </View>
    );
}
