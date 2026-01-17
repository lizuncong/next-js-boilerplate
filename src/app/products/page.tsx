import { parseQs } from '@/libs/query';

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] }>;
}) {
  const param = await params;
  const s = await searchParams;
  console.warn(param, s, parseQs(s));
  return (
    <div>
      hello word

      <div>{JSON.stringify(param)}</div>
      <div>{JSON.stringify(parseQs(s))}</div>
    </div>
  );
}
