import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className='bg-red-400 h-full'>
        <Text className='text-gray-700 text-center text-2xl'>
          Testing
        </Text>
      </View>
    </SafeAreaView>
  );
}