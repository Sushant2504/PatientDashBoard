import { View, Text, ScrollView } from 'react-native';
import { useDashboardData } from '@/hooks/useDashboardData';
import { MotiView } from 'moti';

export default function Dashboard() {
  const { data } = useDashboardData();
  if (!data) return <Text className="text-center mt-4">Loading...</Text>;

  return (
    <ScrollView className="p-4 bg-white flex-1">
      <MotiView
        from={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'timing', duration: 500 }}
        className="bg-white shadow-md rounded-2xl p-4"
      >
        <Text className="text-2xl font-bold mb-2">Hello, {data.name}</Text>
        <Text className="text-base">Patient ID: {data.patientId}</Text>
        <Text className="text-base">Plan: {data.plan}</Text>
        <Text className="text-base">Next Delivery: {data.deliveryDate}</Text>
        <Text className="text-base">Remaining Meds: {data.remainingMeds}</Text>
        <Text className="text-base text-green-600 mt-2">Status: {data.status}</Text>
      </MotiView>
    </ScrollView>
  );
}