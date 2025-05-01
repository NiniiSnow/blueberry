import { RecipePosts } from "@/types/recipes";


export const recipes: RecipePosts = {
    en: [
      {
        id: '1',
        title: 'Pasta Carbonara',
        shortDescription: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
        fullDescription: 'Pasta Carbonara is a traditional Italian dish from Rome. It is made with eggs, cheese (Pecorino Romano), pancetta, and pepper. The dish is known for its creamy sauce, which is created by mixing the eggs and cheese with the hot pasta, creating a rich and flavorful meal.',
        image: 'https://example.com/images/carbonara.jpg',
        date: '2023-10-01'
      },
      {
        id: '2',
        title: 'Chicken Tikka Masala',
        shortDescription: 'A popular Indian dish made with marinated chicken in a spiced tomato sauce.',
        fullDescription: " Chicken Tikka Masala is a dish of marinated chicken pieces cooked in a spiced tomato sauce. It is a popular dish in Indian cuisine and is often served with rice or naan bread. The dish is known for its rich and creamy sauce, which is made with tomatoes, cream, and a blend of spices.",
        image: 'https://example.com/images/tikka_masala.jpg',
        date: '2023-10-02'
      },
      {
        id: '3',
        title: 'Sushi',
        shortDescription: 'A Japanese dish consisting of vinegared rice, seafood, and vegetables.',
        fullDescription: 'Sushi is a Japanese dish that consists of vinegared rice combined with various ingredients, including seafood, vegetables, and sometimes tropical fruits. It is often served with soy sauce, wasabi, and pickled ginger. Sushi can be made in various styles, including nigiri (hand-formed rice topped with fish), maki (rolled sushi), and sashimi (sliced raw fish).',
        image: 'https://example.com/images/sushi.jpg',
        date: '2023-10-03'
      },
      {
        id: '4',
        title: 'Tacos',
        shortDescription: 'A traditional Mexican dish consisting of a folded or rolled tortilla filled with various ingredients.',
        fullDescription: 'Tacos are a traditional Mexican dish made with a folded or rolled tortilla filled with various ingredients, such as meat, beans, cheese, and vegetables. They are often topped with salsa, guacamole, and sour cream. Tacos can be made with different types of tortillas, including corn and flour, and can be served soft or crispy.',
        image: 'https://example.com/images/tacos.jpg',
        date: '2023-10-04'
      }
    ],
    ge: [
      {
        id: '1',
        title: 'პასტა კარბონარა',
        shortDescription: 'კლასიკური იტალიური პასტა კვერცხით, ყველით, პანჩეტათი და პილპილით.',
        fullDescription: 'პასტა კარბონარა არის ტრადიციული იტალიური კერძი რომიდან. ის მზადდება კვერცხით, ყველით (პეკორინო რომანო), პანჩეტათი და პილპილით. კერძი ცნობილია თავისი კრემისებრი სოუსით, რომელიც იქმნება კვერცხისა და ყველის ცხელ პასტასთან შერევით.',
        image: 'https://example.com/images/carbonara.jpg',
        date: '2023-10-01'
      },
      {
        id: '2',
        title: 'ქათმის თიქა მასალა',
        shortDescription: 'პოპულარული ინდური კერძი მარინირებული ქათმით სანელებლიან პომიდვრის სოუსში.',
        fullDescription: 'ქათმის თიქა მასალა არის კერძი მარინირებული ქათმის ნაჭრებით, მომზადებული სანელებლიან პომიდვრის სოუსში. ეს არის პოპულარული კერძი ინდურ სამზარეულოში და ხშირად მიირთმევენ ბრინჯთან ან ნაანის პურთან ერთად.',
        image: 'https://example.com/images/tikka_masala.jpg',
        date: '2023-10-02'
      },
      {
        id: '3',
        title: 'სუში',
        shortDescription: 'იაპონური კერძი, რომელიც შედგება დამარილებული ბრინჯის, ზღვის პროდუქტებისა და ბოსტნეულისგან.',
        fullDescription: 'სუში არის იაპონური კერძი, რომელიც შედგება დამარილებული ბრინჯისგან სხვადასხვა ინგრედიენტებთან ერთად, მათ შორის ზღვის პროდუქტები, ბოსტნეული და ზოგჯერ ტროპიკული ხილი.',
        image: 'https://example.com/images/sushi.jpg',
        date: '2023-10-03'
      },
      {
        id: '4',
        title: 'ტაკოსი',
        shortDescription: 'ტრადიციული მექსიკური კერძი, რომელიც შედგება დაკეცილი ან დახვეული ტორტილასგან სხვადასხვა შიგთავსით.',
        fullDescription: 'ტაკოსი არის ტრადიციული მექსიკური კერძი, დამზადებული დაკეცილი ან დახვეული ტორტილასგან, შევსებული სხვადასხვა ინგრედიენტებით, როგორიცაა ხორცი, ლობიო, ყველი და ბოსტნეული.',
        image: 'https://example.com/images/tacos.jpg',
        date: '2023-10-04'
      }
    ],
    ru: [
      {
        id: '1',
        title: 'Паста Карбонара',
        shortDescription: 'Классическое итальянское блюдо из пасты c яйцами, сыром, панчеттой и перцем.',
        fullDescription: 'Паста Карбонара - это традиционное итальянское блюдо из Рима. Оно готовится c яйцами, сыром (Пекорино Романо), панчеттой и перцем. Блюдо известно своим кремовым соусом.',
        image: 'https://example.com/images/carbonara.jpg',
        date: '2023-10-01'
      },
      {
        id: '2',
        title: 'Курица Тикка Масала',
        shortDescription: 'Популярное индийское блюдо из маринованной курицы в пряном томатном coyce.',
        fullDescription: 'Курица Тикка Масала - это блюдо из маринованных кусочков курицы, приготовленных в пряном томатном coyce. Это популярное блюдо в индийской кухне, которое часто подается c рисом или лепешкой наан.',
        image: 'https://example.com/images/tikka_masala.jpg',
        date: '2023-10-02'
      },
      {
        id: '3',
        title: 'Суши',
        shortDescription: 'Японское блюдо из маринованного риса c морепродуктами и овощами.',
        fullDescription: 'Суши - это японское блюдо, состоящее из маринованного риса в сочетании c различными ингредиентами, включая морепродукты, овощи и иногда тропические фрукты.',
        image: 'https://example.com/images/sushi.jpg',
        date: '2023-10-03'
      },
      {
        id: '4',
        title: 'Такос',
        shortDescription: 'Традиционное мексиканское блюдо из сложенной или свернутой тортильи c различными начинками.',
        fullDescription: 'Такос - это традиционное мексиканское блюдо, приготовленное из сложенной или свернутой тортильи c различными начинками, такими как мясо, бобы, сыр и овощи.',
        image: 'https://example.com/images/tacos.jpg',
        date: '2023-10-04'
      }
    ]
  };