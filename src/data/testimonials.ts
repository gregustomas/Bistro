export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Craig Bator",
    rating: 4.5,
    text: "I've been visiting this restaurant for months, and every experience has been amazing! The atmosphere is warm, and the food is always delicious. A must-try for anyone in the area.",
    avatar: "/authors/avatar-01.webp",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 4,
    text: "If you love authentic dishes made from fresh ingredients, this place is for you. The staff is friendly, and the flavours are spot on. Perfect for any occasion.",
    avatar: "/authors/avatar-02.webp",
  },
  {
    id: 3,
    name: "Martin Dorwart",
    rating: 5,
    text: "Delicious food made with care and fresh ingredients. The atmosphere is cozy, and the staff makes you feel right at home. Ideal for casual dinners or special moments.",
    avatar: "/authors/avatar-03.webp",
  },
  {
    id: 4,
    name: "Alex Chen",
    rating: 4.5,
    text: "Fresh ingredients, balanced flavors, and excellent presentation define this bistro. The staff is polite and always smiling. Perfect for a pleasant dining experience.",
    avatar: "/authors/avatar-04.webp",
  },
];
