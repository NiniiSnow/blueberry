import { NextRequest, NextResponse } from 'next/server';

const recipes = {
  en:[{    
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
    fullDescription:" Chicken Tikka Masala is a dish of marinated chicken pieces cooked in a spiced tomato sauce. It is a popular dish in Indian cuisine and is often served with rice or naan bread. The dish is known for its rich and creamy sauce, which is made with tomatoes, cream, and a blend of spices.",
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

  ]
}

export async function GET(req:NextRequest) {
  // const acceptLang = (req.headers.get('accept-language')?.split(',')[0].split('-')[0] || 'en') as keyof BlogPosts;
  // const data = recipes[acceptLang] || recipes.en  ; 
  return NextResponse.json(recipes);
}

// temp solution