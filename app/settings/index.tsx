import { View, Text, Pressable } from 'react-native';
import { useLoginStore } from '@/store/login';
import { useRouter } from 'expo-router';
import { MotiView } from 'moti';

export default function Settings() {
  const logout = useLoginStore((s) => s.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace('/(auth)/login');
  };

  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <MotiView
        from={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'timing', duration: 500 }}
        className="bg-gray-100 rounded-2xl p-6 shadow"
      >
        <Text className="text-2xl font-bold mb-6">Settings</Text>
        <Pressable
          onPress={handleLogout}
          className="bg-red-500 px-4 py-3 rounded-md"
        >
          <Text className="text-white text-center font-semibold">Logout</Text>
        </Pressable>
      </MotiView>
    </View>
  );
}