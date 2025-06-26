import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/api';

export const useShipmentHistory = () => {
  return useQuery(['shipments'], async () => {
    const res = await axios.get('/shipments');
    return res.data;
  });
};