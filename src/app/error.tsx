'use client';

import Header from '@/components/Header';

export default function ErrorPage() {
  return (
    <div className="h-screen w-screen bg-white">
      <Header />

      <div className="flex flex-col items-center justify-center mt-5">
        <h1 className="text-2xl max-w-[420px] text-center font-bold text-gray-800">
          Desculpe ocorreu um erro ao encontrar os produtos, tente novamente
          mais tarde!
        </h1>
        <p className="text-lg text-gray-600">
          Pedimos desculpas pelo transtorno.
        </p>
      </div>
    </div>
  );
}
