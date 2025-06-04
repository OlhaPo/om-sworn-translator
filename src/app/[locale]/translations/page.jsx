import Image from 'next/image';

export default function TranslationsPage() {
  return (
    <div className="translations flex flex-col md:flex-row flex-grow">
      <div className="mx-auto md:max-w-[1200px] my-15 md:my-20">
        <div className="md:max-h-[400px]">
          <Image
            src="/sworn-translator-stamp.jpg"
            width={1200}
            height={800}
            alt="sworn translator stamp"
            priority
            className="w-full md:max-h-[400px] object-cover object-bottom-right md:rounded-xl"
          />
        </div>
        <h2
          className="text-[24px] md:text-[44px] 3xl:text-5xl text-[#704B40] my-10 md:mt-15 md:mb-10 text-center tracking-wide uppercase md:normal-case font-medium md:font-light px-8 md:px-0 leading-15"
          style={{ fontFamily: 'var(--font-playfair-display)' }}
        >
          Офіційний (завірений) переклад з української на польську мову і з
          польської на українську мову
        </h2>
        <p className="pb-10 px-8 md:px-0">
          У випадку якщо Вам потрібно використати документи оформлені в Україні
          в офіційних державних огранах, організаціях на території Польщі, то
          необхідно також мати їх офіційний переклад виконаний присяжним
          перекладачем. Згідно з абз. 2 ст. 8 Закону «Про іноземців» Dokumenty
          sporządzone w języku obcym, służące za dowód w postępowaniu
          prowadzonym na podstawie ustawy, składa się wraz z ich tłumaczeniem na
          język polski, dokonanym przez tłumacza przysięgłego.
        </p>
        <p className="pb-10 px-8 md:px-0">
          Документи, оформлені іноземною мовою, які є доказами у провадженнях,
          що ведуться відповідно до закону, подаються разом з їх перекладом на
          польську мову, виконаним присяжним перекладачем.
        </p>
        <p className="pb-10 px-8 md:px-0">
          Завірений переклад з української на польську мову (т.зв. «присяжний
          переклад») - це офіційний переклад документів, який виконується
          присяжним перекладачем, ліцензованим Міністерством юстиції Республіки
          Польща та внесеним до{' '}
          <a
            href="https://arch-bip.ms.gov.pl/pl/rejestry-i-ewidencje/tlumacze-przysiegli/lista-tlumaczy-przysieglych/translator,11846.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-state underline underline-offset-4 decoration-[#704B40]"
          >
            списку присяжних перекладачів
          </a>
          .
        </p>

        <p className="pb-10 px-8 md:px-0">
          Такий переклад має юридичну силу та визнається польськими державними
          установами, судами, навчальними закладами та іншими офіційними
          органами.
        </p>
        <h3
          className="text-[#704B40] uppercase font-semibold text-center md:text-left text-[22px] md:text-3xl py-6 tracking-widest px-8 md:px-0"
          style={{ fontFamily: 'var(--font-playfair-display)' }}
        >
          Завірений переклад вам знадобиться, серед іншого, під час:
        </h3>
        <ul>
          <li>
            подачі документів до Управління соціального страхування (ZUS),
            Воєводського управління (Urząd Wojewódzki), Відділу реєстрації актів
            цивільного стану (USC) тощо;
          </li>
          <li>
            оформлення дозволу на перебування, громадянства, дозволу на роботу,
            візи;
          </li>
          <li>
            вступу на навчання, працевлаштування, під час вчинення нотаріальних
            дій;
          </li>
          <li>розгляду судових справ, в поліції, прокуратурі.</li>
        </ul>
        <h3
          className="text-[#704B40] uppercase font-semibold text-center md:text-left text-[22px] md:text-3xl py-6 tracking-widest px-8 md:px-0"
          style={{ fontFamily: 'var(--font-playfair-display)' }}
        >
          Запрошуємо до співпраці та гарантуємо:
        </h3>
        <ul>
          <li>
            завірений переклад (підписом та печаткою) з української мови на
            польську та з польської на українську документів, оформлених в
            органах РАЦСу, школах, вищих навчальних закладах та інших установах,
            медичної документації, довіреностей, заяв, фірмових документів,
            судових рішень та інших документів;
          </li>
          <li>
            звичайний переклад з української на польську мову і навпаки різного
            виду документації, інтернет-сторінок, тощо;
          </li>
          <li>
            підготовка довіреностей та заяв польською / українською / російською
            мовами;
          </li>
          <li>допомога у заповненні анкет, заяв;</li>
          <li>
            усний переклад під час вчинення нотаріальних дій у нотаріуса;
            реєстрації актів цивільного стану у відповідних органах; правочинів
            в інших державних органах, під час екзаменів, які проводяться
            Управлінням технічного нагляду (UDT), під час екзаменів водіння
            (WORD)
          </li>
          <li>чітке дотримання термінів;</li>
          <li>прозору систему розрахунку;</li>
          <li>дотримання конфіденційності.</li>
        </ul>
        <p className="py-10 px-8 md:px-0">
          Професійний переклад — ключ до безперешкодної легалізації Ваших
          документів у Польщі.
        </p>
        <p className="pb-10 px-8 md:px-0">
          Запрошуємо на безкоштовну консультацію та розрахунок вартості — ми
          оперативно опрацюємо Ваш запит, здійснимо розрахунки і повідомимо
          строки його виконання.
        </p>
      </div>
    </div>
  );
}
