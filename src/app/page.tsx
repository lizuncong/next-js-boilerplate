import { getImageData } from "@/services/image";
import Image from "next/image";
import AspectRatio from "@/components/AspectRatio";

export default async function Home() {
  const res = await getImageData();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {
          res?.data?.map((item) => (
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
