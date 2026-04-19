export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/23c63ab2-f2cf-4d83-a2c5-8bf61e90222b/files/4391b2ad-d07d-418e-ac78-33a32815adfb.jpg"
          alt="ASTON WoW epic battle"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1" id="features">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Почему ASTON</h3>
        <p className="text-2xl lg:text-4xl mb-10 text-neutral-900 leading-tight">
          Кастомные рейды, уникальные классы и события каждую неделю. Сервер, где каждый найдёт своё место — от новичка до хардкорного игрока.
        </p>
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex items-start gap-3">
            <span className="text-yellow-500 font-bold text-lg mt-0.5">×5</span>
            <p className="text-neutral-700">Опыт для быстрого старта и комфортной прокачки</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-yellow-500 font-bold text-lg mt-0.5">24/7</span>
            <p className="text-neutral-700">Стабильный сервер с поддержкой и живым онлайном</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-yellow-500 font-bold text-lg mt-0.5">100+</span>
            <p className="text-neutral-700">Кастомных квестов и уникального контента</p>
          </div>
        </div>
        <a href="#play" className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 cursor-pointer w-fit uppercase tracking-wide font-bold">
          Зарегистрироваться
        </a>
      </div>
    </div>
  );
}