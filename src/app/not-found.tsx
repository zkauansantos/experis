export default function NotFoundPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-50">
      <div className="border rounded-lg p-6 border-gray-200">
        <h1 className="text-4xl font-bold text-gray-800">
          404 Página não encontrada
        </h1>
        <p className="text-lg text-gray-600">
          A página que você está procurando não existe.
        </p>
      </div>
    </div>
  );
}
