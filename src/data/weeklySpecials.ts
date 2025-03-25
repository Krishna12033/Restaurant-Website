
export interface SpecialOffer {
  day: string;
  name: string;
  description: string;
  price: string;
  discount: string;
  image: string;
}

export const weeklySpecials: SpecialOffer[] = [
  {
    day: 'Monday',
    name: 'Mediterranean Mondays',
    description: 'Enjoy our chef\'s special Greek-inspired platter with complimentary wine',
    price: '$32',
    discount: '25% OFF',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop'
  },
  {
    day: 'Tuesday',
    name: 'Taco Tuesday Fiesta',
    description: 'Premium taco selection with handcrafted margaritas and live music',
    price: '$28',
    discount: '20% OFF',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&auto=format&fit=crop'
  },
  {
    day: 'Wednesday',
    name: 'Wine & Dine Wednesday',
    description: 'Chef\'s tasting menu with perfectly paired wines from our cellar',
    price: '$45',
    discount: '15% OFF',
    image: 'https://images.unsplash.com/photo-1515778767554-195d1aef1bee?w=800&auto=format&fit=crop'
  },
  {
    day: 'Thursday',
    name: 'Steak Night Thursdays',
    description: 'Prime cuts perfectly aged and grilled to your preference',
    price: '$38',
    discount: '10% OFF',
    image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=800&auto=format&fit=crop'
  },
  {
    day: 'Friday',
    name: 'Seafood Extravaganza',
    description: 'Fresh-caught seafood and champagne pairings to start your weekend',
    price: '$42',
    discount: '15% OFF',
    image: 'https://images.unsplash.com/photo-1579631542614-5e61a0306f20?w=800&auto=format&fit=crop'
  },
  {
    day: 'Saturday',
    name: 'Chef\'s Special Surprise',
    description: 'A rotating surprise menu featuring rare and seasonal ingredients',
    price: '$49',
    discount: '10% OFF',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop'
  },
  {
    day: 'Sunday',
    name: 'Sunday Family Feast',
    description: 'Share our family-style platters with loved ones, including dessert',
    price: '$35/person',
    discount: '30% OFF',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop'
  }
];
