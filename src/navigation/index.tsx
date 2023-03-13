import { NavigationContainer } from '@react-navigation/native';
import { NavigationBar } from './NavigationBar';

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <NavigationBar />
        </NavigationContainer>
    );
}
