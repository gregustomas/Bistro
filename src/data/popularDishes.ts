import grilled from "@/assets/popular/grilled-herb-chicken.webp";
import pizza from "@/assets/popular/classic-margherita-pizza.webp";
import shrimp from "@/assets/popular/spicy-shrimp-linguine.webp";
import cake from "@/assets/popular/chocolate-lava-cake.webp";

export interface PopularDish {
  image: ImageMetadata;
  alt: string;
  name: string;
  category: string;
  description: string;
}

export const PopularDishes: PopularDish[] = [
  {
    image: grilled,
    alt: "Grilled Herb Chicken",
    name: "Grilled Herb Chicken",
    category: "Main course 🥘",
    description:
      "Juicy chicken grilled with herbs and served with garlic sauce.",
  },
  {
    image: pizza,
    alt: "Classic Margherita Pizza",
    name: "Classic Margherita Pizza",
    category: "Main course 🍕",
    description: "Crispy crust, fresh mozzarella, and basil a true classic.",
  },
  {
    image: shrimp,
    alt: "Spicy Shrimp Linguine",
    name: "Spicy Shrimp Linguine",
    category: "Main course 🥘",
    description: "Shrimp, chili, and creamy tomato sauce tossed to perfection.",
  },
  {
    image: cake,
    alt: "Chocolate Lava Cake",
    name: "Chocolate Lava Cake",
    category: "Desert 🍫",
    description: "Warm molten cake with a scoop of vanilla ice cream.",
  },
];
