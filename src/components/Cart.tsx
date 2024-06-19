export default function Cart() {
  return (
    <div className="flex-[0.4] bg-white shadow-md hidden md:block">
      <header className="bg-gray-50 px-6 py-[22px]">
        <strong>Carrinho</strong>
      </header>

      <div className="p-6">
        <p>Seu carrinho está vazio</p>
      </div>
    </div>
  );
}
