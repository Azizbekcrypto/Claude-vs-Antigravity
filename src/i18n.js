// Barcha matn UZ va RU — tepadagi tugma bilan almashtiriladi.
// Ma'lumotlar 2026-yil holatiga ko'ra (tekshirilgan).

export const translations = {
  uz: {
    langLabel: 'UZ',
    nav: { intro: 'Boshlanish', what: 'Ular nima?', diff: 'Farq', table: 'Taqqoslash', price: 'Narx', verdict: 'Xulosa' },

    hero: {
      kicker: 'AI dasturlash davri',
      title1: 'Claude',
      vs: 'vs',
      title2: 'Antigravity',
      subtitle: 'Ikki sun’iy intellekt platformasi. Bittasi terminaldan, ikkinchisi koinotday keng IDE’dan. Qaysi biri kelajakni yozadi?',
      scroll: 'Pastga aylantiring',
    },

    snapshot: {
      kicker: '⚡ Bir qarashda',
      title: 'Qisqa javob — darrov',
      verdict: 'Yangi boshlovchiga — Antigravity. Jiddiy, chuqur ishga — Claude. Quyida nega aynan shundayligini ko‘rasiz.',
      claude: { tag: 'Claude', stat: 20, kind: 'price', statLabel: '/oy — dan boshlab', super: 'Eng kuchli fikrlash + barqaror limit', who: 'Chuqur loyiha uchun' },
      anti: { tag: 'Antigravity', stat: 0, kind: 'free', statLabel: 'bepul preview', super: 'Vizual boshqaruv + ko‘p agent', who: 'O‘rganish uchun' },
    },

    intro: {
      kicker: '01 — Nega bu muhim',
      title: 'Endi kodni AI yozadi',
      lead: 'Bir necha yil oldin dasturchi har bir qatorni o‘zi yozardi. Bugun esa siz maqsadni aytasiz — AI o‘zi fayllarni ochadi, kod yozadi, test qiladi va xatolarni tuzatadi.',
      points: [
        { n: '2025', t: 'Agent davri', d: 'AI shunchaki maslahat bermaydi — u sizning nomingizdan ish bajaradi.' },
        { n: '10×', t: 'Tezlik', d: 'Bir kunlik ish bir soatga, bir soatlik ish bir daqiqaga aylandi.' },
        { n: '2', t: 'Yo‘nalish', d: 'Bozorda ikki kuchli yondashuv: Anthropic Claude va Google Antigravity.' },
      ],
    },

    claude: {
      kicker: '02 — Claude (Anthropic)',
      title: 'Claude Code',
      tag: 'Terminaldagi aqlli agent',
      desc: 'Claude — Anthropic kompaniyasining sun’iy intellekti. “Claude Code” esa uning dasturlash uchun agenti: u terminalda, kod muharririda (VS Code, JetBrains) va brauzerda ishlaydi. Katta loyihalarni chuqur tushunadi va murakkab vazifalarni mustaqil bajaradi.',
      bullets: [
        'Terminal-markazli: tezkor, yengil, har qanday muhitga mos',
        '1 million token kontekst — butun loyihani bir vaqtda “ko‘radi”',
        'Eng kuchli model: Claude Opus 4.8 (chuqur fikrlash)',
        'MCP, subagentlar, hooks — kengaytiriladigan ekotizim',
      ],
    },

    antigravity: {
      kicker: '03 — Google Antigravity',
      title: 'Antigravity',
      tag: 'Agentlar boshqaruv markazi (IDE)',
      desc: 'Antigravity — Google’ning 2025-yil 18-noyabrda chiqargan “agent-markazli” IDE’si (VS Code asosida). Unda kod muharriri yonida “Agent Manager” bor: bir nechta AI agentni bir vaqtda ishga tushirib, ularning rejasi, ekran tasvirlari va natijalarini kuzatasiz. AI hatto brauzerni ham boshqaradi.',
      bullets: [
        'IDE-markazli: vizual, ko‘p oynali, agentlarni parallel boshqarish',
        'Brauzer integratsiyasi — AI o‘zi sayt ochib, natijani tekshiradi',
        'Ko‘p model: Gemini 3 Pro/Flash, Claude, GPT-OSS',
        'Artifacts — reja, skrinshot, yozuvlar avtomatik hujjatlanadi',
      ],
    },

    diff: {
      kicker: '04 — Asosiy farq',
      title: 'Ikki xil falsafa',
      lead: 'Ikkalasi ham AI agent, lekin dunyoga butunlay boshqacha qaraydi.',
      left: {
        name: 'Claude — Terminal yo‘li',
        items: [
          'Minimalizm: ortiqcha oyna yo‘q, faqat siz va agent',
          'Istalgan IDE yoki server ichida ishlaydi',
          'Chuqurlik va aniqlikka urg‘u',
          'Tajribali dasturchi uchun ideal',
        ],
      },
      right: {
        name: 'Antigravity — IDE yo‘li',
        items: [
          'Vizuallik: hamma narsa ko‘z oldingizda',
          'O‘zining tayyor muhiti bilan keladi',
          'Ko‘p agentni parallel boshqarish',
          'Yangi boshlovchi uchun ko‘rgazmali',
        ],
      },
    },

    table: {
      kicker: '05 — Yonma-yon taqqoslash',
      title: 'Raqamlar va faktlar',
      lead: 'Sof, ob’ektiv jadval — har birining haqiqiy holati.',
      fact: '💡 1 million token ≈ 750 000 so‘z — qariyb 7–8 ta roman. Ya’ni ikkalasi ham butun loyihangizni bir vaqtda “yodida” tutadi.',
      head: { feature: 'Mezon', claude: 'Claude', antigravity: 'Antigravity' },
      rows: [
        { f: 'Asosiy shakl', c: 'Terminal + IDE + Web', a: 'Mustaqil IDE (VS Code asosida)' },
        { f: 'Ishlab chiqaruvchi', c: 'Anthropic', a: 'Google' },
        { f: 'Asosiy model', c: 'Claude Opus 4.8', a: 'Gemini 3 Pro' },
        { f: 'Kontekst oynasi', c: '1 million token', a: '1 million token (Gemini)' },
        { f: 'Ko‘p model tanlash', c: 'Claude modellari', a: 'Gemini, Claude, GPT-OSS' },
        { f: 'Parallel agentlar', c: 'Subagentlar orqali', a: 'Agent Manager (asosiy kuch)' },
        { f: 'Brauzerni boshqarish', c: 'MCP orqali qo‘shiladi', a: 'Ichiga o‘rnatilgan' },
        { f: 'Boshlash qulayligi', c: 'O‘rtacha (terminal)', a: 'Oson (vizual)' },
      ],
    },

    price: {
      kicker: '06 — Pul masalasi',
      title: 'Narx jihati',
      lead: 'Eng muhim savol: cho‘ntakka qanday ta’sir qiladi?',
      claudeCard: {
        name: 'Claude Code',
        plans: [
          { p: 'Pro', v: 20, d: 'oyiga — boshlang‘ich' },
          { p: 'Max 5×', v: 100, d: 'oyiga — faol dasturchi' },
          { p: 'Max 20×', v: 200, d: 'oyiga — professional' },
        ],
        api: 'API (1M token): Opus $5/$25 · Sonnet $3/$15 · Haiku $1/$5',
        note: 'To‘lov sifatga aylanadi: barqaror limit, kuchli model.',
      },
      antiCard: {
        name: 'Antigravity',
        plans: [
          { p: 'Preview', v: 0, d: 'bepul — lekin haftalik limit' },
          { p: 'Pro', v: 20, d: 'oyiga — kengroq limit' },
          { p: 'Ultra', v: 200, d: 'oyiga — eng yuqori limit' },
        ],
        api: 'Modellar bir umumiy limitdan sarflanadi (token narxi bo‘yicha)',
        note: 'Bepul — lekin 2026-boshida limitlar keskin qisqardi.',
      },
      perMonth: 'oy',
      free: 'BEPUL',
    },

    limit: {
      kicker: '07 — Diqqat: limit masalasi',
      title: 'Antigravity limiti yetadimi?',
      lead: 'Eng ko‘p so‘raladigan savol — va eng Togri javob.',
      cards: [
        { icon: '🎁', t: 'Boshida — “cheksizdek”', d: 'Chiqqanda haftada ~300 million input token’gacha ishlatish mumkin edi. Talabalar uchun ajoyib edi.' },
        { icon: '⚠️', t: '2026-boshida — keskin qisqardi', d: 'Limit haftada ~9 million input’gacha tushdi — bu qariyb 33 barobar kam. Foydalanuvchilar norozilik bildirishdi.' },
        { icon: '🎯', t: 'Bugun — “o‘rganishga yetadi”', d: 'Kunlik mashqlar va kichik loyihalar uchun bepul tier yetarli. Lekin kun bo‘yi og‘ir ishlasangiz — limitga urilasiz.' },
      ],
    },

    verdict: {
      kicker: '08 — Xulosa',
      title: 'Qaysi birini tanlash kerak?',
      lead: 'Sof baho: g‘olib yo‘q — vazifaga qarab tanlanadi.',
      cases: [
        { when: 'Agar yangi boshlayotgan bo‘lsangiz', pick: 'Antigravity', why: 'Vizual, ko‘rgazmali, bepul boshlash mumkin — har bir qadam ko‘z oldingizda.' },
        { when: 'Agar chuqur, jiddiy loyiha qilsangiz', pick: 'Claude', why: 'Barqaror limit, eng kuchli model, katta kodni aniq tushunish.' },
        { when: 'Agar pul muhim bo‘lsa', pick: 'Antigravity (boshlash)', why: 'Bepul tier — o‘rganish uchun. Keyin kerak bo‘lsa Claude’ga o‘tasiz.' },
        { when: 'Agar bir nechta vazifani parallel qilsangiz', pick: 'Antigravity', why: 'Agent Manager bir nechta agentni bir vaqtda boshqaradi.' },
      ],
      students: {
        title: 'O‘quvchilarimizga tavsiya',
        text: 'Boshlash uchun — Antigravity. Bepul, vizual va limiti o‘rganishga yetadi. Kuchingiz oshib, jiddiy loyihalar qila boshlaganingizda — Claude’ga o‘ting: u barqaror, chuqur va professional ish uchun ishonchli.',
      },
    },

    outro: {
      title: 'Kelajak allaqachon shu yerda',
      text: 'Eng muhimi — vosita emas, balki siz. AI faqat kuchaytirgich; g‘oya, did va mantiq siznikidir.',
      made: 'Zarina Opa uchun tayyorlandi',
    },
  },

  ru: {
    langLabel: 'RU',
    nav: { intro: 'Начало', what: 'Что это?', diff: 'Разница', table: 'Сравнение', price: 'Цена', verdict: 'Вывод' },

    hero: {
      kicker: 'Эпоха AI-разработки',
      title1: 'Claude',
      vs: 'vs',
      title2: 'Antigravity',
      subtitle: 'Две платформы искусственного интеллекта. Одна — из терминала, другая — из IDE размером со вселенную. Какая напишет будущее?',
      scroll: 'Прокрутите вниз',
    },

    snapshot: {
      kicker: '⚡ Одним взглядом',
      title: 'Короткий ответ — сразу',
      verdict: 'Новичку — Antigravity. Для серьёзной, глубокой работы — Claude. Ниже вы увидите, почему именно так.',
      claude: { tag: 'Claude', stat: 20, kind: 'price', statLabel: '/мес — от', super: 'Сильнейшее мышление + стабильный лимит', who: 'Для глубоких проектов' },
      anti: { tag: 'Antigravity', stat: 0, kind: 'free', statLabel: 'бесплатный preview', super: 'Визуальное управление + много агентов', who: 'Для учёбы' },
    },

    intro: {
      kicker: '01 — Почему это важно',
      title: 'Теперь код пишет AI',
      lead: 'Несколько лет назад разработчик писал каждую строку сам. Сегодня вы называете цель — а AI сам открывает файлы, пишет код, тестирует и исправляет ошибки.',
      points: [
        { n: '2025', t: 'Эра агентов', d: 'AI не просто советует — он действует от вашего имени.' },
        { n: '10×', t: 'Скорость', d: 'Дневная работа за час, часовая — за минуту.' },
        { n: '2', t: 'Направления', d: 'На рынке два сильных подхода: Anthropic Claude и Google Antigravity.' },
      ],
    },

    claude: {
      kicker: '02 — Claude (Anthropic)',
      title: 'Claude Code',
      tag: 'Умный агент в терминале',
      desc: 'Claude — искусственный интеллект компании Anthropic. «Claude Code» — его агент для разработки: работает в терминале, в редакторе кода (VS Code, JetBrains) и в браузере. Глубоко понимает большие проекты и самостоятельно решает сложные задачи.',
      bullets: [
        'Ориентирован на терминал: быстрый, лёгкий, под любую среду',
        '1 миллион токенов контекста — «видит» весь проект сразу',
        'Сильнейшая модель: Claude Opus 4.8 (глубокое мышление)',
        'MCP, субагенты, hooks — расширяемая экосистема',
      ],
    },

    antigravity: {
      kicker: '03 — Google Antigravity',
      title: 'Antigravity',
      tag: 'Центр управления агентами (IDE)',
      desc: 'Antigravity — «агентоцентричная» IDE от Google (на базе VS Code), выпущенная 18 ноября 2025 года. Рядом с редактором есть «Agent Manager»: запускаете несколько AI-агентов одновременно и следите за их планом, скриншотами и результатами. AI даже управляет браузером.',
      bullets: [
        'Ориентирована на IDE: визуально, многооконно, параллельные агенты',
        'Интеграция с браузером — AI сам открывает сайт и проверяет',
        'Много моделей: Gemini 3 Pro/Flash, Claude, GPT-OSS',
        'Artifacts — план, скриншоты, записи документируются автоматически',
      ],
    },

    diff: {
      kicker: '04 — Главное отличие',
      title: 'Две философии',
      lead: 'Оба — AI-агенты, но смотрят на мир совершенно по-разному.',
      left: {
        name: 'Claude — путь терминала',
        items: [
          'Минимализм: никаких лишних окон, только вы и агент',
          'Работает внутри любой IDE или сервера',
          'Упор на глубину и точность',
          'Идеален для опытного разработчика',
        ],
      },
      right: {
        name: 'Antigravity — путь IDE',
        items: [
          'Визуальность: всё перед глазами',
          'Поставляется с готовой средой',
          'Параллельное управление многими агентами',
          'Наглядно для новичка',
        ],
      },
    },

    table: {
      kicker: '05 — Сравнение бок о бок',
      title: 'Цифры и факты',
      lead: 'Честная, объективная таблица — реальное положение каждого.',
      fact: '💡 1 миллион токенов ≈ 750 000 слов — почти 7–8 романов. То есть оба «держат в памяти» весь ваш проект сразу.',
      head: { feature: 'Критерий', claude: 'Claude', antigravity: 'Antigravity' },
      rows: [
        { f: 'Основная форма', c: 'Терминал + IDE + Web', a: 'Отдельная IDE (на базе VS Code)' },
        { f: 'Разработчик', c: 'Anthropic', a: 'Google' },
        { f: 'Основная модель', c: 'Claude Opus 4.8', a: 'Gemini 3 Pro' },
        { f: 'Окно контекста', c: '1 миллион токенов', a: '1 миллион токенов (Gemini)' },
        { f: 'Выбор моделей', c: 'Модели Claude', a: 'Gemini, Claude, GPT-OSS' },
        { f: 'Параллельные агенты', c: 'Через субагентов', a: 'Agent Manager (главная сила)' },
        { f: 'Управление браузером', c: 'Добавляется через MCP', a: 'Встроено' },
        { f: 'Лёгкость старта', c: 'Средняя (терминал)', a: 'Лёгкая (визуально)' },
      ],
    },

    price: {
      kicker: '06 — Вопрос денег',
      title: 'Сторона цены',
      lead: 'Главный вопрос: как это бьёт по карману?',
      claudeCard: {
        name: 'Claude Code',
        plans: [
          { p: 'Pro', v: 20, d: 'в месяц — старт' },
          { p: 'Max 5×', v: 100, d: 'в месяц — активный разработчик' },
          { p: 'Max 20×', v: 200, d: 'в месяц — профессионал' },
        ],
        api: 'API (1M токенов): Opus $5/$25 · Sonnet $3/$15 · Haiku $1/$5',
        note: 'Плата превращается в качество: стабильный лимит, сильная модель.',
      },
      antiCard: {
        name: 'Antigravity',
        plans: [
          { p: 'Preview', v: 0, d: 'бесплатно — но недельный лимит' },
          { p: 'Pro', v: 20, d: 'в месяц — шире лимит' },
          { p: 'Ultra', v: 200, d: 'в месяц — максимальный лимит' },
        ],
        api: 'Модели тратятся из единого лимита (по цене токенов)',
        note: 'Бесплатно — но в начале 2026 лимиты резко урезали.',
      },
      perMonth: 'мес',
      free: 'БЕСПЛАТНО',
    },

    limit: {
      kicker: '07 — Внимание: вопрос лимита',
      title: 'Хватает ли лимита Antigravity?',
      lead: 'Самый частый вопрос — и самый честный ответ.',
      cards: [
        { icon: '🎁', t: 'В начале — «как будто без границ»', d: 'На старте можно было тратить до ~300 млн input-токенов в неделю. Для студентов — отлично.' },
        { icon: '⚠️', t: 'В начале 2026 — резко урезали', d: 'Лимит упал до ~9 млн input в неделю — это примерно в 33 раза меньше. Поднялась волна недовольства.' },
        { icon: '🎯', t: 'Сегодня — «для учёбы хватает»', d: 'Для ежедневных упражнений и небольших проектов бесплатного тарифа достаточно. Но при тяжёлой работе весь день — упрётесь в лимит.' },
      ],
    },

    verdict: {
      kicker: '08 — Вывод',
      title: 'Что же выбрать?',
      lead: 'Честная оценка: победителя нет — выбор зависит от задачи.',
      cases: [
        { when: 'Если вы только начинаете', pick: 'Antigravity', why: 'Визуально, наглядно, можно начать бесплатно — каждый шаг перед глазами.' },
        { when: 'Если делаете глубокий серьёзный проект', pick: 'Claude', why: 'Стабильный лимит, сильнейшая модель, точное понимание большого кода.' },
        { when: 'Если важны деньги', pick: 'Antigravity (старт)', why: 'Бесплатный тариф — для учёбы. Потом при необходимости перейдёте на Claude.' },
        { when: 'Если ведёте несколько задач параллельно', pick: 'Antigravity', why: 'Agent Manager управляет несколькими агентами одновременно.' },
      ],
      students: {
        title: 'Рекомендация нашим ученикам',
        text: 'Для старта — Antigravity. Бесплатно, визуально, и лимита хватает для учёбы. Когда наберётесь сил и начнёте серьёзные проекты — переходите на Claude: он стабилен, глубок и надёжен для профессиональной работы. А лучше всего — попробуйте оба и найдите свой стиль.',
      },
    },

    outro: {
      title: 'Будущее уже здесь',
      text: 'Главное — не инструмент, а вы. AI лишь усилитель; идея, вкус и логика принадлежат вам.',
      made: 'Подготовлено для Zarina Opa :)',
    },
  },
}
