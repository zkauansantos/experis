import { Accordion } from '@/components/Accordion';
import Cart from '@/components/Cart';
import Categories from '@/components/Categories';
import Header from '@/components/Header';
import Input from '@/components/Input';
import { foodMenuService } from '@/services/food-menu';

export default async function Home() {
  const data = await foodMenuService.getAll();

  return (
    <div className="h-screen w-screen bg-white">
      <Header />

      <main className="p-4">
        <Input />

        <section className="md:bg-gray-100 mt-[6px] mx-auto max-w-5xl flex items-start md:py-8 md:px-10 gap-6">
          <div className="md:flex-[0.6] flex-1 md:bg-white md:px-4 md:py-5 md:shadow-md md:justify-between">
            <Categories
              categories={data.sections.map((section) => ({
                id: section.id,
                name: section.name,
                image: section.images[0].image,
              }))}
            />

            <Accordion sections={data.sections} />
          </div>

          <Cart />
        </section>
      </main>
    </div>
  );
}
