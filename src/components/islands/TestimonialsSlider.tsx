"use client";

import type { Testimonial } from "@/data/testimonials";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react";

interface Props {
  testimonials: Testimonial[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const full = star <= Math.floor(rating);
        const half = !full && star - 0.5 === rating;

        return full ? (
          <Star
            key={star}
            size={18}
            className="fill-amber-400 text-amber-400"
          />
        ) : half ? (
          <StarHalf
            key={star}
            size={18}
            className="fill-amber-400 text-amber-400"
          />
        ) : (
          <Star key={star} size={18} className="fill-muted text-muted" />
        );
      })}
    </div>
  );
}

export default function TestimonialSlider({ testimonials }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
      {/* leva strana */}
      <div className="mx-auto mb-12 flex max-w-2xl flex-col space-y-4 sm:mb-16 lg:mb-24">
        <Badge variant="outline">Testimonials</Badge>
        <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
          Customers Feedback
        </h2>
        <p className="text-xl text-muted-foreground">
          Here's how our customers enjoyed our restaurant and the services we
          offer.
        </p>

        <div className="flex gap-3">
          <Button
            onClick={scrollPrev}
            size="icon"
            className="rounded-full size-11"
            variant="secondary"
          >
            <ChevronLeft size={18} />
          </Button>

          <Button
            onClick={scrollNext}
            size="icon"
            className="rounded-full size-11"
          >
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>

      {/* prava strana */}
      <div ref={emblaRef} className="lg:col-span-2 overflow-hidden">
        <div className="flex">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="mx-2 shrink-0 basis-full sm:basis-1/2 bg-card border hover:border-primary transition-colors duration-250 p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="size-10 rounded-full object-cover"
                />
                <span className="font-semibold">{t.name}</span>
              </div>
              <StarRating rating={t.rating} />
              <p className="text-muted-foreground">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
