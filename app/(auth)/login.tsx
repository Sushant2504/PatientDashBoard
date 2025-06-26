import { View, Text, TextInput, Pressable, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import axios from '@/lib/api';
import { useLoginStore } from '@/store/login';
import { AnimatePresence, MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';
import { Patient } from '@/types';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

type LoginFormData = z.infer<typeof schema>;

export default function Login() {
  const router = useRouter();
  const login = useLoginStore((s) => s.login);
  const { control, handleSubmit } = useForm<LoginFormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await axios.post<{ user: Patient }>('/login', data);
      login(res.data.user);
      router.replace('/dashboard');
    } catch {
      Alert.alert('Login failed', 'Invalid credentials');
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 justify-center items-center bg-white px-6"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <AnimatePresence>
        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 600, easing: Easing.out(Easing.exp) }}
          className="w-full"
        >
          <Text className="text-2xl font-bold text-center mb-6">Welcome Back 👋</Text>

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                className="border border-gray-300 p-3 mb-4 rounded-md"
                {...field}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextInput
                placeholder="Password"
                secureTextEntry
                className="border border-gray-300 p-3 mb-6 rounded-md"
                {...field}
              />
            )}
          />

          <Pressable
            onPress={handleSubmit(onSubmit)}
            className="bg-blue-600 py-3 rounded-md"
          >
            <Text className="text-white text-center font-medium">Login</Text>
          </Pressable>
        </MotiView>
      </AnimatePresence>
    </KeyboardAvoidingView>
  );
}
