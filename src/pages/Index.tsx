import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/44ac49f1-caad-4ffa-bbb4-2ae0dc7974c2/files/f81d08a5-00e7-46c9-8a4f-d24ab04a230b.jpg";

const concreteData = [
  {
    mark: "М100",
    class: "B7.5",
    mobility: "П1–П2",
    frost: "F50",
    water: "W2",
    usage: ["Подготовительные работы", "Бетонная подготовка под фундаменты", "Стяжка полов в нежилых помещениях"],
    desc: "Лёгкий класс прочности. Используется как подготовительный слой перед основным бетонированием. Не несёт конструктивной нагрузки.",
    price: "от 3 200 ₽/м³",
  },
  {
    mark: "М200",
    class: "B15",
    mobility: "П2–П3",
    frost: "F100",
    water: "W4",
    usage: ["Фундаменты малоэтажных домов", "Отмостки и дорожки", "Полы в гаражах и складах"],
    desc: "Универсальный бетон для частного строительства. Оптимальный выбор для фундаментов лёгких конструкций и благоустройства территории.",
    price: "от 3 800 ₽/м³",
  },
  {
    mark: "М250",
    class: "B20",
    mobility: "П2–П4",
    frost: "F150",
    water: "W6",
    usage: ["Монолитные фундаменты", "Перекрытия жилых домов", "Лестничные марши и площадки"],
    desc: "Повышенная прочность и морозостойкость. Подходит для ответственных конструкций в малоэтажном и коттеджном строительстве.",
    price: "от 4 200 ₽/м³",
  },
  {
    mark: "М300",
    class: "B22.5",
    mobility: "П2–П4",
    frost: "F200",
    water: "W6",
    usage: ["Монолитные стены и колонны", "Подземные конструкции", "Промышленные полы"],
    desc: "Высокопрочный бетон для промышленного и гражданского строительства. Отличная водонепроницаемость для подземных конструкций.",
    price: "от 4 700 ₽/м³",
  },
  {
    mark: "М350",
    class: "B25",
    mobility: "П3–П5",
    frost: "F200",
    water: "W8",
    usage: ["Несущие конструкции многоэтажных зданий", "Мосты и путепроводы", "Резервуары и ёмкости"],
    desc: "Профессиональный класс для ответственного строительства. Превосходная водонепроницаемость и морозостойкость.",
    price: "от 5 300 ₽/м³",
  },
  {
    mark: "М400",
    class: "B30",
    mobility: "П3–П5",
    frost: "F300",
    water: "W10",
    usage: ["Метрополитен и тоннели", "Гидротехнические сооружения", "Аэродромные покрытия"],
    desc: "Элитный класс прочности. Применяется в крупных инфраструктурных и гидротехнических объектах с максимальными требованиями.",
    price: "от 6 100 ₽/м³",
  },
];

const reviews = [
  {
    name: "Сергей Петров",
    company: "СК «Монолит»",
    text: "Работаем с БетонПро уже три года. Качество стабильное, доставка всегда вовремя. Когда нужен был М350 срочно — привезли в тот же день. Рекомендую.",
    rating: 5,
    date: "Март 2026",
  },
  {
    name: "Алексей Громов",
    company: "Частный застройщик",
    text: "Строил дом самостоятельно. Ребята помогли с расчётом нужного объёма, не переплатил. Бетон качественный, машина пришла точно по времени.",
    rating: 5,
    date: "Февраль 2026",
  },
  {
    name: "Ирина Захарова",
    company: "ООО «СтройГрупп»",
    text: "Поставляем бетон через БетонПро на объекты по всей области. Цены конкурентные, документы всегда в порядке. Паспорт качества приходит вместе с машиной.",
    rating: 5,
    date: "Январь 2026",
  },
];

const sections = ["Главная", "Каталог", "Доставка", "Отзывы", "Контакты"];

export default function Index() {
  const [active, setActive] = useState("Главная");
  const [selected, setSelected] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-white" style={{ fontFamily: "'Roboto', sans-serif" }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D1117]/95 backdrop-blur border-b border-[#1E2A38]">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wider text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
            БЕТОН<span className="text-[#F59E0B]">ПРО</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className={`text-sm tracking-widest uppercase transition-colors ${
                  active === s ? "text-[#F59E0B]" : "text-gray-400 hover:text-white"
                }`}
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {s}
              </button>
            ))}
          </div>
          <a
            href="tel:+74951234567"
            className="hidden md:flex items-center gap-2 bg-[#F59E0B] text-black px-4 py-2 font-semibold text-sm tracking-wider hover:bg-[#D97706] transition-colors"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            <Icon name="Phone" size={14} />
            +7 (495) 123-45-67
          </a>
          <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-[#0D1117] border-t border-[#1E2A38] px-4 py-4 flex flex-col gap-4">
            {sections.map((s) => (
              <button key={s} onClick={() => scrollTo(s)} className="text-sm tracking-widest uppercase text-gray-300 text-left" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {s}
              </button>
            ))}
            <a href="tel:+74951234567" className="font-semibold text-[#F59E0B] text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>
              +7 (495) 123-45-67
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="Главная" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117] via-[#0D1117]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "linear-gradient(#F59E0B 1px, transparent 1px), linear-gradient(90deg, #F59E0B 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#F59E0B]" />
              <span className="text-[#F59E0B] text-sm tracking-[0.3em] uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>Производство и доставка</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-none mb-6 tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
              БЕТОН<br />
              <span className="text-[#F59E0B]">ЛЮБОЙ</span><br />
              МАРКИ
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-6 max-w-lg">
              Производство бетона М100–М400 с доставкой миксером по Москве и области. Паспорт качества с каждой поставкой.
            </p>
            <div className="inline-flex items-center gap-3 bg-[#F59E0B]/15 border border-[#F59E0B]/40 px-5 py-3 mb-8">
              <Icon name="BadgePercent" size={18} className="text-[#F59E0B] flex-shrink-0" />
              <span className="text-white font-semibold text-sm md:text-base" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Для частных лиц — цена ниже, чем у конкурентов
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("Каталог")}
                className="bg-[#F59E0B] text-black font-bold px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#D97706] transition-all hover:scale-105"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Смотреть каталог
              </button>
              <button
                onClick={() => scrollTo("Контакты")}
                className="border border-white/30 text-white font-bold px-8 py-4 text-sm tracking-widest uppercase hover:border-[#F59E0B] hover:text-[#F59E0B] transition-all"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Получить расчёт
              </button>
            </div>

            <div className="mt-16 flex flex-wrap gap-8">
              {[
                { val: "15+", label: "лет на рынке" },
                { val: "5 000+", label: "объектов сдано" },
                { val: "24/7", label: "приём заказов" },
                { val: "2 часа", label: "доставка" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold text-[#F59E0B]" style={{ fontFamily: "'Oswald', sans-serif" }}>{s.val}</div>
                  <div className="text-gray-400 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="Каталог" className="py-24 bg-[#0D1117]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#F59E0B]" />
            <span className="text-[#F59E0B] text-sm tracking-[0.3em] uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>Продукция</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>КАТАЛОГ БЕТОНА</h2>
          <p className="text-gray-400 mb-12 max-w-xl text-sm leading-relaxed">
            Выберите марку бетона — нажмите на карточку, чтобы увидеть полные технические характеристики и область применения.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {concreteData.map((item, i) => (
              <div key={i}>
                <div
                  className={`border cursor-pointer transition-all duration-300 ${
                    selected === i ? "border-[#F59E0B] bg-[#1A2030]" : "border-[#1E2A38] bg-[#111827] hover:border-[#2E3D50]"
                  }`}
                  onClick={() => setSelected(selected === i ? null : i)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-4xl font-bold text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>{item.mark}</div>
                        <div className="text-gray-400 text-sm mt-1">Класс {item.class}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[#F59E0B] font-semibold text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>{item.price}</div>
                        <Icon name={selected === i ? "ChevronUp" : "ChevronDown"} size={16} className="text-gray-500 ml-auto mt-1" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[
                        { label: "Подвижность", val: item.mobility },
                        { label: "Морозост.", val: item.frost },
                        { label: "Водонепр.", val: item.water },
                      ].map((p) => (
                        <div key={p.label} className="bg-[#0D1117] p-2 text-center">
                          <div className="text-white font-semibold text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>{p.val}</div>
                          <div className="text-gray-500 text-xs mt-0.5">{p.label}</div>
                        </div>
                      ))}
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>

                  {selected === i && (
                    <div className="border-t border-[#F59E0B]/30 bg-[#0D1117] p-6">
                      <div className="text-xs tracking-widest text-[#F59E0B] uppercase mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>Область применения</div>
                      <ul className="space-y-2">
                        {item.usage.map((u, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F59E0B] flex-shrink-0" />
                            {u}
                          </li>
                        ))}
                      </ul>
                      <button
                        className="mt-4 w-full bg-[#F59E0B] text-black font-bold py-3 text-sm tracking-widest uppercase hover:bg-[#D97706] transition-colors"
                        style={{ fontFamily: "'Oswald', sans-serif" }}
                        onClick={(e) => { e.stopPropagation(); scrollTo("Контакты"); }}
                      >
                        Заказать {item.mark}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section id="Доставка" className="py-24 bg-[#060A10]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#F59E0B]" />
            <span className="text-[#F59E0B] text-sm tracking-[0.3em] uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>Логистика</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{ fontFamily: "'Oswald', sans-serif" }}>ДОСТАВКА</h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              {[
                { icon: "Truck", title: "Автобетоносмеситель", text: "Собственный парк миксеров объёмом 6–10 м³. Доставка по Москве и Московской области в радиусе 150 км." },
                { icon: "Clock", title: "Время доставки", text: "Стандартная доставка — 2–4 часа с момента оформления заказа. Срочная доставка — от 1 часа (при наличии машины)." },
                { icon: "MapPin", title: "Зона покрытия", text: "Москва и вся Московская область. Выезд в другие регионы — по согласованию с менеджером." },
                { icon: "FileText", title: "Документы", text: "Паспорт качества, товарная накладная, счёт-фактура. Все документы передаются водителем при сдаче бетона." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 border border-[#1E2A38] bg-[#111827]">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#F59E0B]/10 flex items-center justify-center">
                    <Icon name={item.icon as any} size={20} className="text-[#F59E0B]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>{item.title}</div>
                    <div className="text-gray-400 text-sm leading-relaxed">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="bg-[#111827] border border-[#1E2A38] p-6">
                <div className="text-xl font-bold mb-4 text-[#F59E0B]" style={{ fontFamily: "'Oswald', sans-serif" }}>Стоимость доставки</div>
                <div className="space-y-0">
                  {[
                    { zone: "Москва (МКАД)", price: "Бесплатно", min: "от 4 м³" },
                    { zone: "МО до 30 км", price: "2 500 ₽", min: "от 4 м³" },
                    { zone: "МО до 60 км", price: "4 500 ₽", min: "от 6 м³" },
                    { zone: "МО до 100 км", price: "7 000 ₽", min: "от 8 м³" },
                    { zone: "МО до 150 км", price: "по запросу", min: "от 8 м³" },
                  ].map((z, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-[#1E2A38] last:border-0">
                      <div className="text-gray-300 text-sm">{z.zone}</div>
                      <div className="flex items-center gap-4">
                        <div className="text-gray-500 text-xs">{z.min}</div>
                        <div className="font-bold text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>{z.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/30 p-5">
                <div className="flex gap-3">
                  <Icon name="Info" size={18} className="text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300">
                    При заказе от 10 м³ — скидка 5% на бетон. При регулярных поставках — индивидуальные условия. Уточняйте у менеджера.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="Отзывы" className="py-24 bg-[#0D1117]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#F59E0B]" />
            <span className="text-[#F59E0B] text-sm tracking-[0.3em] uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>Клиенты</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{ fontFamily: "'Oswald', sans-serif" }}>ОТЗЫВЫ</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="border border-[#1E2A38] bg-[#111827] p-6 relative">
                <div className="absolute top-6 right-6 text-6xl text-[#F59E0B]/10 font-bold leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>"</div>
                <div className="flex gap-1 mb-4">
                  {[...Array(r.rating)].map((_, j) => (
                    <Icon key={j} name="Star" size={14} className="text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">«{r.text}»</p>
                <div className="border-t border-[#1E2A38] pt-4">
                  <div className="font-semibold text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>{r.name}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{r.company} · {r.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="Контакты" className="py-24 bg-[#060A10]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#F59E0B]" />
            <span className="text-[#F59E0B] text-sm tracking-[0.3em] uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>Связь</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{ fontFamily: "'Oswald', sans-serif" }}>КОНТАКТЫ</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6 mb-10">
                {[
                  { icon: "Phone", label: "Телефон", val: "+7 (495) 123-45-67", sub: "Ежедневно с 7:00 до 22:00" },
                  { icon: "Mail", label: "Email", val: "info@betonpro.ru", sub: "Ответим в течение 1 часа" },
                  { icon: "MapPin", label: "Адрес", val: "Москва, ул. Промышленная, 12", sub: "Отгрузка с бетонного завода" },
                ].map((c, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#F59E0B]/10 flex items-center justify-center">
                      <Icon name={c.icon as any} size={18} className="text-[#F59E0B]" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">{c.label}</div>
                      <div className="font-semibold text-white text-lg" style={{ fontFamily: "'Oswald', sans-serif" }}>{c.val}</div>
                      <div className="text-gray-500 text-sm">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#111827] border border-[#1E2A38] p-8">
              <div className="text-xl font-bold mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>Получить расчёт стоимости</div>
              <div className="space-y-4">
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-wider block mb-2">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    className="w-full bg-[#0D1117] border border-[#1E2A38] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#F59E0B] transition-colors placeholder-gray-600"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-wider block mb-2">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-[#0D1117] border border-[#1E2A38] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#F59E0B] transition-colors placeholder-gray-600"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-wider block mb-2">Марка бетона и объём</label>
                  <input
                    type="text"
                    placeholder="Например: М300, 10 м³"
                    className="w-full bg-[#0D1117] border border-[#1E2A38] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#F59E0B] transition-colors placeholder-gray-600"
                  />
                </div>
                <button
                  className="w-full bg-[#F59E0B] text-black font-bold py-4 text-sm tracking-widest uppercase hover:bg-[#D97706] transition-all mt-2"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  Отправить заявку
                </button>
                <p className="text-gray-600 text-xs text-center">
                  Перезвоним в течение 15 минут в рабочее время
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#060A10] border-t border-[#1E2A38] py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>
            БЕТОН<span className="text-[#F59E0B]">ПРО</span>
          </div>
          <div className="text-gray-500 text-sm">
            © 2026 БетонПро. Производство и доставка бетона по Москве и МО.
          </div>
          <a href="tel:+74951234567" className="text-[#F59E0B] font-semibold hover:text-[#D97706] transition-colors" style={{ fontFamily: "'Oswald', sans-serif" }}>
            +7 (495) 123-45-67
          </a>
        </div>
      </footer>
    </div>
  );
}