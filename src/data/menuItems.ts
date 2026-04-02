import Salmon from "@/assets/new/new-items-01.webp";
import Chicken from "@/assets/new/new-items-02.webp";
import StirFry from "@/assets/new/new-items-03.webp";
import type { ImageMetadata } from "astro";

export interface MenuItem {
  image: ImageMetadata;
  alt: string;
  name: string;
  description: string;
  link: string;
}

export const MenuItems: MenuItem[] = [
  {
    image: Salmon,
    alt: "Lemon Herb Grilled Salmon",
    name: "Lemon Herb Grilled Salmon",
    description:
      "Delight in the perfect balance of zesty lemon and savoury herbs, beautifully paired with a fresh garden salad.",
    link: "#",
  },
  {
    image: Chicken,
    alt: "Spicy Mango Chicken",
    name: "Spicy Mango Chicken",
    description:
      "A sweet and spicy fusion of tender chicken breast combined with ripe mango and a delightful chili kick.",
    link: "#",
  },
  {
    image: StirFry,
    alt: "Vegetarian Tempeh Stir Fry",
    name: "Vegetarian Tempeh Stir Fry",
    description:
      "A healthy, hearty and nutritious dish featuring tempeh, fresh seasonal vegetables, and a light, flavourful sauce.",
    link: "#",
  },
];
