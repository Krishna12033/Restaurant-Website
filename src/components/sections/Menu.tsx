
import React from 'react';
import MenuCard from '../ui/MenuCard';
import CustomButton from '../ui/Button';

const menuItems = [
  {
    title: 'Pan-Seared Scallops',
    description: 'Fresh scallops with cauliflower purée, crispy bacon, and microgreens',
    price: '$28',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=2070&auto=format&fit=crop',
    featured: true,
  },
  {
    title: 'Wild Mushroom Risotto',
    description: 'Creamy arborio rice with assorted wild mushrooms and truffle oil',
    price: '$22',
    image: 'https://images.unsplash.com/photo-1635686476970-b817ca3cbcc9?q=80&w=1964&auto=format&fit=crop',
  },
  {
    title: 'Braised Short Rib',
    description: 'Slow-cooked beef short rib with root vegetables and red wine reduction',
    price: '$32',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Mediterranean Sea Bass',
    description: 'Grilled sea bass with herb salad, lemon confit, and olive tapenade',
    price: '$30',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop',
    featured: true,
  },
  {
    title: 'Duo of Duck',
    description: 'Seared duck breast and confit leg with cherry sauce and seasonal vegetables',
    price: '$34',
    image: 'https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Basil Panna Cotta',
    description: 'Creamy basil-infused panna cotta with strawberry coulis and fresh berries',
    price: '$14',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1925&auto=format&fit=crop',
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="section-padding bg-restaurant-50 dark:bg-zinc-900">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-primary/5 px-4 py-1 text-xs font-medium uppercase tracking-wider text-primary dark:bg-primary/10">
            Our Menu
          </span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Signature Dishes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Explore our carefully curated selection of dishes that showcase our chef's creativity and commitment to exceptional flavors.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item, index) => (
            <MenuCard
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              featured={item.featured}
              className={`opacity-0 animate-fade-up`}
              data-delay={index * 100}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <CustomButton size="lg" variant="outline" className="mx-auto">
            View Full Menu
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
