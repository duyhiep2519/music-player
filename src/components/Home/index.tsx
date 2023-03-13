import { Text, View } from 'react-native';
import { SongList } from '@app/components/Library/SongList';

export default function Home() {
    return (
        <View>
            <Text>Home</Text>
            <SongList />
        </View>
    );
}
