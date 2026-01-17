'use client';
import { useRouter } from 'next/navigation';
import { qsStringify } from '@/libs/query';

export default function Button() {
  const router = useRouter();
  return (
    <button onClick={() => {
      const obj = { id: '33', count: 4, types: [4, 5], provide: { category: 3, types: [6, 7] } };
      const qs = qsStringify(obj);
      router.push(`/products?${qs}`);
    }}
    >
      跳转
    </button>
  );
}
