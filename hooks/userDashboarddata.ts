import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/api';

export const useDashboardData = () => {
  return useQuery(['dashboard'], async () => {
    const res = await axios.get('/dashboard');
    return res.data;
  });
};