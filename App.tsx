import React from 'react';
import {SafeAreaView} from 'react-native';
import { Text } from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text preset='headingLarge' bold italic>teste</Text>
      <Text preset='paragraphMedium'>teste</Text>
    </SafeAreaView>
  );
}

export default App;