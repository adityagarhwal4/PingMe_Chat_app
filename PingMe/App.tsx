import { NavigationContainer } from '@react-navigation/native';
import BaseStack from './src/navigation/BaseStack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} >
        <NavigationContainer>
          <BaseStack />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
