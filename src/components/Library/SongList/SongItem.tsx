import React from 'react';

import { StyleSheet, Alert, FlatList, View, Text, Image } from 'react-native';

import { SongItem } from './types';
const styles = StyleSheet.create({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 14,
    },
    image: {
        width: 54,
        height: 54,
        borderRadius: 20,
        marginHorizontal: 14,
    },
    border: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'grey',
    },
});

export const SongListItem = ({ mediaUrl, id, name, author }: SongItem) => {
    return (
        <View style={[styles.root]}>
            <Image style={styles.image} source={{ uri: mediaUrl }} />
            <View>
                <Text>{name}</Text>
                <Text>{author}</Text>
            </View>
        </View>
    );
};
