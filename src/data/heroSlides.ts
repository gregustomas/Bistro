export interface HeroSlide {
  id: number;
  image: string;
  alt: string;
  testimonial: string;
  authorImage: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/images/dish-01.webp",
    alt: "dish-01",
    testimonial:
      "The ambiance is perfect and the food is absolutely delicious. Highly recommended!",
    authorImage: "/authors/avatar-01.webp",
  },
  {
    id: 2,
    image: "/images/dish-02.webp",
    alt: "dish-02",
    testimonial:
      "Best dining experience in town. The staff is friendly and the menu is exceptional.",
    authorImage: "/authors/avatar-02.webp",
  },
  {
    id: 3,
    image: "/images/dish-03.webp",
    alt: "dish-03",
    testimonial:
      "Every dish is crafted with care. This place never disappoints!",
    authorImage: "/authors/avatar-03.webp",
  },
  {
    id: 4,
    image: "/images/dish-04.webp",
    alt: "dish-04",
    testimonial:
      "Great atmosphere and incredible flavors. A must-visit restaurant!",
    authorImage: "/authors/avatar-04.webp",
  },
  {
    id: 5,
    image: "/images/dish-05.webp",
    alt: "dish-05",
    testimonial:
      "Every dish is crafted with care. This place never disappoints!",
    authorImage: "/authors/avatar-02.webp",
  },
];
