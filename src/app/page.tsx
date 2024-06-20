import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { foodMenuService } from '@/services/food-menu';

export default async function Home() {
  const data = await foodMenuService.getAll();

  return (
    <div className="h-screen w-screen bg-white">
      <Header />

      <Hero data={data} />
    </div>
  );
}
