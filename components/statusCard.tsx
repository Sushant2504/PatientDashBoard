import { View, Text } from 'react-native';
import { STATUS_COLORS } from '@/constants';

interface Props {
  label: string;
  value: string | number;
  status?: 'active' | 'inactive';
}

export default function StatusCard({ label, value, status }: Props) {
  const statusClass = status ? STATUS_COLORS[status] : '';
  return (
    <View className="bg-white p-4 rounded-lg shadow mb-3">
      <Text className="text-gray-500 text-xs uppercase mb-1">{label}</Text>
      <Text className={`text-lg font-semibold ${statusClass}`}>{value}</Text>
    </View>
  );
}