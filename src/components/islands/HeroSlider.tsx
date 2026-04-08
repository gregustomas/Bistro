"use client";

import type { HeroSlide } from "@/data/heroSlides";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";

interface Props {
  slides: HeroSlide[];
}

export default function HeroSlider({ slides }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Embla
  const [mainRef, mainApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);
  const [thumbRef, thumbApi] = useEmblaCarousel({loop: true,
  });
  const [testimonialRef, testimonialApi] = useEmblaCarousel({ loop: true });

  const onMainSelect = useCallback(() => {
    if (!mainApi) return;
    const index = mainApi.selectedScrollSnap();
    setSelectedIndex(index);
    testimonialApi?.scrollTo(index);
    thumbApi?.scrollTo(index);
  }, [mainApi, thumbApi, testimonialApi]);

  const onTestimonialSelect = useCallback(() => {
    if (!testimonialApi) return;
    const index = testimonialApi.selectedScrollSnap();
    setSelectedIndex(index);
    mainApi?.scrollTo(index);
    thumbApi?.scrollTo(index);
  }, [mainApi, thumbApi, testimonialApi]);

  useEffect(() => {
    if (!mainApi) return;
    mainApi.on("select", onMainSelect);
    return () => {
      mainApi.off("select", onMainSelect);
    };
  }, [mainApi, onMainSelect]);

  useEffect(() => {
    if (!testimonialApi) return;
    testimonialApi.on("select", onTestimonialSelect);
    return () => {
      testimonialApi.off("select", onTestimonialSelect);
    };
  }, [testimonialApi, onTestimonialSelect]);

  useEffect(() => {
    if (!thumbApi) return;
    const onThumbSelect = () => {
      const index = thumbApi.selectedScrollSnap();
      setSelectedIndex(index);
      mainApi?.scrollTo(index);
      testimonialApi?.scrollTo(index);
    };
    thumbApi.on("select", onThumbSelect);
    return () => {
      thumbApi.off("select", onThumbSelect);
    };
  }, [thumbApi, mainApi, testimonialApi]);

  const onThumbClick = useCallback(
    (index: number) => {
      mainApi?.scrollTo(index);
      testimonialApi?.scrollTo(index);
      thumbApi?.scrollTo(index);
    },
    [mainApi, testimonialApi, thumbApi],
  );

  return (
    <div className="mx-auto pt-16 md:pt-12 flex h-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
      {/* main */}
      <div className="grid grid-cols-1 gap-6 gap-y-12 md:gap-y-16 lg:grid-cols-5">
        <div className="flex flex-col gap-5 justify-center lg:col-span-3 px-2 md:px-0 items-center lg:items-start">
          <h1 className="text-3xl leading-[1.29167] font-semibold text-balance max-lg:text-center sm:text-4xl lg:text-5xl">
            Savor the taste of perfection
          </h1>
          <p className="text-muted-foreground max-w-xl text-xl max-lg:text-center">
            Welcome to Restaurant where passion meets the plate.From sizzling
            appetisers to signature desserts, every dish is crafted to delight
            your senses.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button variant="fancy" asChild>
              <a href="#">Order now →</a>
            </Button>

            <Button variant="secondary" asChild>
              <a href="#">Book table</a>
            </Button>
          </div>
        </div>
        <div
          ref={mainRef}
          className="relative w-full lg:col-span-2 overflow-hidden"
        >
          <div className="flex -ml-4">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="min-w-0 shrink-0 grow-0 basis-full pl-4 flex w-full items-center justify-center"
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="size-95 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-10 md:flex lg:flex-row justify-between items-center w-full overflow-hidden">
        {/* thumbnails */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-background to-transparent" />
          <div ref={thumbRef} className="relative w-md md:w-2xl overflow-hidden">
            <div className="flex">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => onThumbClick(index)}
                  className="shrink-0 px-2"
                >
                  <div className="p-2 w-40 flex flex-col items-center justify-center">
                    <div
                      className={`absolute bottom-0 -z-1 ${selectedIndex === index ? "text-primary" : "text-border"}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="161"
                        height="92"
                        viewBox="0 0 161 92"
                        fill="none"
                      >
                        <path
                          d="M0.682517 80.6118L0.501193 39.6946C0.480127 34.9409 3.80852 30.8294 8.46241 29.8603L148.426 0.713985C154.636 -0.579105 160.465 4.16121 160.465 10.504V80.7397C160.465 86.2674 155.98 90.7465 150.453 90.7397L10.6701 90.5674C5.16936 90.5607 0.706893 86.1125 0.682517 80.6118Z"
                          stroke="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="size-25 object-contain"
                      loading="lazy"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* testimonials */}
        <div
          ref={testimonialRef}
          className="relative flex w-full items-center justify-center lg:col-span-2 overflow-hidden max-w-md"
        >
          <div className="flex -ml-4">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="min-w-0 max-w-md shrink-0 grow-0 basis-full flex h-full min-h-14 w-full justify-center gap-4 px-6 lg:items-center"
              >
                <img
                  src={slide.authorImage}
                  alt={slide.alt}
                  className="size-10 rounded-full"
                  loading="lazy"
                />
                <div className="hidden sm:block shrink-0 w-0.5 h-6 rounded-full bg-primary" />
                <p className="text-card-foreground max-w-70 md:max-w-full">{slide.testimonial}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
