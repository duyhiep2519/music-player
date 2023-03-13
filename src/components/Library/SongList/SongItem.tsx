import React from 'react';
import { StyleSheet, Alert, FlatList, Text, Image, View } from 'react-native';

import { SongItem } from './types';
const styles = StyleSheet.create({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        height: 53,
        borderRadius: 5,
    },
    image: {
        width: 53,
        height: 53,
        borderRadius: 5,
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.6,
        lineHeight: 20,
        color: '#FFFFFF',
    },
});

export const SongListItem = ({ mediaUrl, id, name, author }: SongItem) => {
    return (
        <View style={[styles.root]}>
            <Image style={styles.image} source={{ uri: mediaUrl }} />
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text>{author}</Text>
            </View>
        </View>
    );
};
