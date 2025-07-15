"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getProductsData } from '@/lib/dataUtils';

const ProductCategories = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsData().then((data) => {
      setCategories(data.categories);
      setProducts(data.products);
    });
  }, []);

  // For each category, get the first product's image as the category image (fallback to category.image)
  const categoriesWithImages = categories.map((cat) => {
    const product = products.find((p) => p.category_id === cat.category_id);
    return {
      ...cat,
      image: product ? product.image : cat.image || "https://via.placeholder.com/300x300?text=No+Image"
    };
  });

  return (
    <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-px bg-white/50" />
            <span className="text-sm font-medium tracking-wide uppercase">Our Products</span>
            <div className="w-8 h-px bg-white/50" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Discover Our{" "}
            <span className="text-yellow-400 relative">
              Product Range!
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 rounded" />
            </span>
          </h2>

          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Comprehensive agricultural solutions for all your farming needs
          </p>
        </div>

        {/* Category Carousel */}
        <Carousel opts={{ align: 'start', loop: true }} className="w-full max-w-full mx-auto">
          <CarouselContent className="-ml-2 md:-ml-3">
            {categoriesWithImages.map((category) => (
              <CarouselItem key={category.category_id} className="pl-2 md:pl-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div 
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 h-[360px] flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-blue-800 mb-4 font-semibold text-sm line-clamp-2">
                      {category.description || "Explore our range of products in this category."}
                    </p>
                    <div className="mt-auto">
                      <Link 
                        href={`/products/${category.category_id}`}
                        className="inline-flex items-center justify-between w-full px-4 py-2 text-blue-700 border border-blue-900 rounded-lg group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300"
                      >
                        <span>View Products</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7 7l7-7-7-7" /></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Navigation Arrows */}
          <div className="flex items-center justify-end gap-2 mt-4 px-4">
            <CarouselPrevious className="position-static" />
            <CarouselNext className="position-static" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ProductCategories; 