import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import tw from 'twrnc'

const App = () => {
  return (
    <View>
      <Text style={tw`pt-20 bg-red text-3xl text-red-800`}>Hello world RN</Text>
    </View>
  );
};

export default App;
