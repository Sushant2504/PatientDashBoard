import { FlashList } from '@shopify/flash-list';
import { View, Text } from 'react-native';
import { useShipmentHistory } from '@/hooks/useShipmentHistory';
import { MotiView } from 'moti';

export default function History() {
  const { data } = useShipmentHistory();
  if (!data) return <Text className="text-center mt-4">Loading...</Text>;

  return (
    <FlashList
      estimatedItemSize={70}
      data={data}
      renderItem={({ item, index }) => (
        <MotiView
          from={{ opacity: 0, translateX: -20 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ delay: index * 100 }}
          className="bg-white p-4 border-b border-gray-200"
        >
          <Text className="font-semibold text-base">Date: {item.date}</Text>
          <Text className="text-sm">Status: {item.status}</Text>
          <Text className="text-sm">Qty: {item.quantity}</Text>
        </MotiView>
      )}
      keyExtractor={(_, index) => String(index)}
    />
  );
}
