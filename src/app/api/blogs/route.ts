import { NextRequest, NextResponse } from 'next/server';
import { BlogPosts } from '@/types/blog';

export const blogs: BlogPosts = {
  en: [
    {
      id: '1',
      title: 'Health Benefits of Wild Blueberries',
      shortDescription: 'Explore the amazing health benefits of wild blueberries and why theyre called a superfood.',
      fullDescription: `Wild blueberries are not just delicious; they're packed with antioxidants and essential nutrients that can boost your health in numerous ways. Research shows they can improve brain function, reduce inflammation, and support heart health.

      Key benefits include:
      • Higher antioxidant content than cultivated blueberries
      • Improved memory and cognitive function
      • Better cardiovascular health
      • Enhanced immune system support
      
      Our wild blueberries are carefully harvested at peak ripeness to ensure maximum nutritional value.`,
      image:'/images/blueberry03.webp',
      date: '2024-02-15'
    },
    {
      id: '2',
      title: 'Growing Blueberries: A Beginner\'s Guide',
      shortDescription: 'Learn how to grow your own blueberries with this beginner-friendly guide.',
      fullDescription: `Starting your own blueberry garden can be a rewarding experience. This guide covers everything you need to know, from choosing the right soil to harvesting your first crop.

      Steps include:
      • Preparing the soil for optimal growth
      • Selecting the best blueberry varieties for your region
      • Planting and caring for your bushes
      • Tips for pest control and fertilization
      
      With patience and care, you can enjoy fresh, homegrown blueberries year after year.`,
      image:'/images/blueberry_garden_scene.webp',
      date: '2024-02-10'
    },
    {
      id: '3',
      title: 'Seasonal Care for Blueberry Bushes',
      shortDescription: 'A month-by-month guide to keeping your blueberry bushes healthy.',
      fullDescription: `Blueberry bushes require specific care throughout the year to ensure a bountiful harvest. This guide provides a detailed breakdown of seasonal tasks.

      Highlights include:
      • Winter pruning and preparation
      • Spring fertilization and pest management
      • Summer watering and mulching
      • Fall cleanup and soil conditioning
      
      Follow these steps to maintain healthy and productive blueberry bushes all year round.`,
      image:'/images/blueberry_in_hands.webp',
      date: '2024-02-05'
    },
    {
      id: '4',
      title: 'Organic Pest Control for Blueberries',
      shortDescription: 'Protect your blueberry plants with natural pest control methods.',
      fullDescription: `Blueberry plants are susceptible to various pests and diseases. This article explores organic solutions to keep your plants safe.

      Topics covered:
      • Identifying common blueberry pests
      • Natural remedies and treatments
      • Preventative measures to avoid infestations
      • Tips for maintaining plant health
      
      Using organic methods ensures your blueberries remain safe and chemical-free.`,
      image:'/images/family_blueberry_field.webp',
      date: '2024-01-30'
    }
  ],
  ge: [
    {
      id: '1',
      title: 'ველური მოცვის სასარგებლო თვისებები',
      shortDescription: 'გაეცანით ველური მოცვის სასარგებლო თვისებებს და გაიგეთ, რატომ უწოდებენ მას სუპერპროდუქტს.',
      fullDescription: `ველური მოცვი არა მხოლოდ გემრიელია; ის მდიდარია ანტიოქსიდანტებით და აუცილებელი საკვები ნივთიერებებით, რომლებსაც შეუძლიათ მრავალმხრივ გააუმჯობესონ თქვენი ჯანმრთელობა.

      კვლევები აჩვენებს, რომ ისინი აუმჯობესებენ ტვინის ფუნქციონირებას, ამცირებენ ანთებას და ხელს უწყობენ გულის ჯანმრთელობას.

      ძირითადი სარგებელი მოიცავს:
      • უფრო მაღალი ანტიოქსიდანტების შემცველობა, ვიდრე კულტივირებულ მოცვში
      • გაუმჯობესებული მეხსიერება და კოგნიტური ფუნქცია
      • უკეთესი გულ-სისხლძარღვთა ჯანმრთელობა
      • გაძლიერებული იმუნური სისტემის მხარდაჭერა
      
      ჩვენი ველური მოცვი ფრთხილად იკრიფება სრული სიმწიფის დროს მაქსიმალური საკვები ღირებულების უზრუნველსაყოფად.`,
      image:'/images/blueberry03.webp',
      date: '2024-02-15'
    },
    {
      id: '2',
      title: 'მოცვის მოყვანა: დამწყების გზამკვლევი',
      shortDescription: 'შეისწავლეთ მოცვის მოყვანის ძირითადი ეტაპები დამწყებისთვის.',
      fullDescription: `მოცვის ბაღის გაშენება შეიძლება იყოს სასიამოვნო გამოცდილება. ეს გზამკვლევი მოიცავს ყველაფერს, რაც უნდა იცოდეთ, ნიადაგის მომზადებიდან მოსავლის აღებამდე.

      ნაბიჯები მოიცავს:
      • ნიადაგის მომზადება ოპტიმალური ზრდისთვის
      • საუკეთესო მოცვის ჯიშების არჩევა თქვენი რეგიონისთვის
      • ბუჩქების დარგვა და მოვლა
      • რჩევები მავნებლების კონტროლისა და განაყოფიერებისთვის
      
      მოთმინებით და ზრუნვით, თქვენ შეგიძლიათ ისიამოვნოთ ახალი, სახლში მოყვანილი მოცვით წლების განმავლობაში.`,
      image:'/images/blueberry_garden_scene.webp',
      date: '2024-02-10'
    },
    {
      id: '3',
      title: 'მოცვის ბუჩქების სეზონური მოვლა',
      shortDescription: 'თვეების მიხედვით მოცვის ბუჩქების ჯანსაღი მოვლის გზამკვლევი.',
      fullDescription: `მოცვის ბუჩქებს მთელი წლის განმავლობაში სპეციფიკური მოვლა სჭირდება, რათა უზრუნველყოს უხვი მოსავალი. ეს გზამკვლევი გთავაზობთ სეზონური დავალებების დეტალურ აღწერას.

      ძირითადი პუნქტები მოიცავს:
      • ზამთრის გასხვლა და მომზადება
      • გაზაფხულის განაყოფიერება და მავნებლების მართვა
      • ზაფხულის მორწყვა და მულჩირება
      • შემოდგომის დასუფთავება და ნიადაგის მომზადება
      
      მიჰყევით ამ ნაბიჯებს, რათა შეინარჩუნოთ ჯანსაღი და პროდუქტიული მოცვის ბუჩქები მთელი წლის განმავლობაში.`,
      image:'/images/blueberry_in_hands.webp',
      date: '2024-02-05'
    },
    {
      id: '4',
      title: 'მოცვის ორგანული მავნებლებთან ბრძოლა',
      shortDescription: 'დაიცავით თქვენი მოცვის მცენარეები ბუნებრივი მავნებლების კონტროლის მეთოდებით.',
      fullDescription: `მოცვის მცენარეები მგრძნობიარეა სხვადასხვა მავნებლებისა და დაავადებების მიმართ. ეს სტატია განიხილავს ორგანულ გადაწყვეტილებებს, რათა მცენარეები უსაფრთხოდ შეინარჩუნოთ.

      განხილული თემები:
      • გავრცელებული მოცვის მავნებლების იდენტიფიცირება
      • ბუნებრივი საშუალებები და მკურნალობა
      • პრევენციული ზომები ინფექციების თავიდან ასაცილებლად
      • რჩევები მცენარეთა ჯანმრთელობის შესანარჩუნებლად
      
      ორგანული მეთოდების გამოყენება უზრუნველყოფს, რომ თქვენი მოცვი დარჩეს უსაფრთხო და ქიმიკატებისგან თავისუფალი.`,
      image:'/images/family_blueberry_field.webp',
      date: '2024-01-30'
    }
  ],
  ru: [
    {
      id: '1',
      title: 'Польза дикой голубики',
      shortDescription: 'Узнайте o полезных свойствах дикой голубики и почему её называют суперпродуктом.',
      fullDescription: `Дикая голубика не только вкусная; она богата антиоксидантами и необходимыми питательными веществами, которые могут улучшить ваше здоровье различными способами.

      Исследования показывают, что они улучшают функции мозга, уменьшают воспаление и поддерживают здоровье сердца.

      Основные преимущества включают:
      • Более высокое содержание антиоксидантов, чем в культивированной голубике
      • Улучшенная память и когнитивные функции
      • Лучшее сердечно-сосудистое здоровье
      • Усиленная поддержка иммунной системы
      
      Наша дикая голубика тщательно собирается на пике спелости для обеспечения максимальной питательной ценности.`,
      image:'/images/blueberry03.webp',
      date: '2024-02-15'
    },
    {
      id: '2',
      title: 'Выращивание голубики: руководство для начинающих',
      shortDescription: 'Узнайте, как вырастить голубику c помощью этого руководства для начинающих.',
      fullDescription: `Создание собственного сада голубики может быть увлекательным занятием. Это руководство охватывает все, что вам нужно знать, от выбора подходящей почвы до  первого урожая.

      Шаги включают:
      • Подготовка почвы для оптимального роста
      • Выбор лучших сортов голубики для вашего региона
      • Посадка и уход за кустами
      • Советы по борьбе c вредителями и удобрению
      
     C терпением и заботой вы сможете наслаждаться свежей, выращенной дома голубикой год за годом.`,
      image:'/images/blueberry_garden_scene.webp',
      date: '2024-02-10'
    },
    {
      id: '3',
      title: 'Сезонный уход за кустами голубики',
      shortDescription: 'Пошаговое руководство по уходу за кустами голубики в течение года.',
      fullDescription: `Кусты голубики требуют специфического ухода в течение года для обеспечения богатого урожая. Это руководство предоставляет подробное описание сезонных задач.

      Основные моменты включают:
      • Зимняя обрезка и подготовка
      • Весенняя подкормка и борьба c вредителями
      • Летний полив и мульчирование
      • Осенняя уборка и кондиционирование почвы
      
      Следуйте этим шагам, чтобы поддерживать здоровые и продуктивные кусты голубики круглый год.`,
      image:'/images/blueberry_in_hands.webp',
      date: '2024-02-05'
    },
    {
      id: '4',
      title: 'Органическая защита голубики от вредителей',
      shortDescription: 'Защитите свои растения голубики c помощью натуральных методов борьбы c вредителями.',
      fullDescription: `Растения голубики подвержены различным вредителям и болезням. Эта статья исследует органические решения для защиты ваших растений.

      Рассматриваемые темы:
      • Определение распространенных вредителей голубики
      • Натуральные средства и методы лечения
      • Профилактические меры для предотвращения заражений
      • Советы по поддержанию здоровья растений
      
      Использование органических методов гарантирует, что ваша голубика останется безопасной и свободной от химикатов.`,
      image:'/images/family_blueberry_field.webp',
      date: '2024-01-30'
    }
  ]
};

export async function GET(req: NextRequest) {
    const acceptLang = (req.headers.get('accept-language')?.split(',')[0].split('-')[0] || 'en') as keyof BlogPosts;
    const data = blogs[acceptLang] || blogs.en; 
    return NextResponse.json(data);
}
