import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import AspectRatio from '@/components/AspectRatio';
import { getImageData } from '@/services/image';
import Button from './button';

export default async function Home() {
  const t = await getTranslations('HomePage');

  const res = await getImageData();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <Button />
        <h1>{t('title')}</h1>
        {
          res?.data?.map(item => (
            <AspectRatio key={item.id}>
              <Image
                className="dark:invert"
                src={item.url}
                alt="Next.js logo"
                width={item.width}
                height={item.height}
                priority
              />
            </AspectRatio>
          ))
        }
      </main>
    </div>
  );
}
