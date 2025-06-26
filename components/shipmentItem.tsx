import { View, Text } from 'react-native';
import { formatDate } from '@/utils/formatDate';

interface Props {
  date: string;
  status: string;
  quantity: number;
}

export default function ShipmentItem({ date, status, quantity }: Props) {
  return (
    <View className="bg-white px-4 py-3 border-b border-gray-200">
      <Text className="font-semibold text-sm">{formatDate(date)}</Text>
      <Text className="text-xs text-gray-600">Status: {status}</Text>
      <Text className="text-xs text-gray-600">Quantity: {quantity}</Text>
    </View>
  );
}