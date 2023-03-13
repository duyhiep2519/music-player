import { SONGS } from '@app/mocks/songs';
import React from 'react';
import { StyleSheet, Alert, FlatList } from 'react-native';

import { SongListItem } from './SongItem';

export const SongList = () => {
    return (
        <FlatList
            data={SONGS}
            renderItem={({ item }) => <SongListItem {...item} />}
            keyExtractor={(item) => item.name}
        />
    );
};
