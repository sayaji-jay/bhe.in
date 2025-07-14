"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Dummy data from product-carousel.jsx
const dummyProducts = [
  {
    id: 1,
    product_name: "Smartphone Pro Max",
    composition: "Latest 5G smartphone with advanced camera system",
    category: "Electronics",
    category_id: "electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    price: "$999"
  },
  {
    id: 2,
    product_name: "Wireless Headphones",
    composition: "Premium noise-cancelling wireless headphones",
    category: "Electronics",
    category_id: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    price: "$299"
  },
  {
    id: 3,
    product_name: "Running Shoes",
    composition: "Comfortable athletic shoes for daily running",
    category: "Sports",
    category_id: "sports",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    price: "$129"
  },
  {
    id: 4,
    product_name: "Yoga Mat",
    composition: "Non-slip premium yoga mat for all exercises",
    category: "Sports",
    category_id: "sports",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop",
    price: "$49"
  },
  {
    id: 5,
    product_name: "Coffee Maker",
    composition: "Automatic drip coffee maker with programmable timer",
    category: "Kitchen",
    category_id: "kitchen",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop",
    price: "$89"
  },
  {
    id: 6,
    product_name: "Blender",
    composition: "High-speed blender for smoothies and food prep",
    category: "Kitchen",
    category_id: "kitchen",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=300&fit=crop",
    price: "$159"
  },
  {
    id: 7,
    product_name: "Leather Wallet",
    composition: "Genuine leather wallet with multiple card slots",
    category: "Fashion",
    category_id: "fashion",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    price: "$69"
  },
  {
    id: 8,
    product_name: "Sunglasses",
    composition: "UV protection sunglasses with polarized lenses",
    category: "Fashion",
    category_id: "fashion",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop",
    price: "$199"
  },
  {
    id: 9,
    product_name: "Gaming Laptop",
    composition: "High-performance gaming laptop with RTX graphics",
    category: "Electronics",
    category_id: "electronics",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=300&fit=crop",
    price: "$1299"
  },
  {
    id: 10,
    product_name: "Basketball",
    composition: "Professional grade basketball for indoor/outdoor play",
    category: "Sports",
    category_id: "sports",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=300&fit=crop",
    price: "$39"
  },
  {
    id: 11,
    product_name: "Air Fryer",
    composition: "Healthy cooking air fryer with digital controls",
    category: "Kitchen",
    category_id: "kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",
    price: "$119"
  },
  {
    id: 12,
    product_name: "Watch",
    composition: "Stylish analog watch with leather strap",
    category: "Fashion",
    category_id: "fashion",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=300&fit=crop",
    price: "$249"
  }
];

const dummyCategories = [
  { category_id: "electronics", title: "Electronics", description: "Latest gadgets and devices for your tech needs." },
  { category_id: "sports", title: "Sports", description: "Gear and equipment for all your sporting activities." },
  { category_id: "kitchen", title: "Kitchen", description: "Modern appliances and tools for your kitchen." },
  { category_id: "fashion", title: "Fashion", description: "Trendy and stylish accessories and clothing." }
];

const ProductCategories = () => {
  // For each category, get the first product's image as the category image
  const categoriesWithImages = dummyCategories.map((cat) => {
    const product = dummyProducts.find((p) => p.category_id === cat.category_id);
    return {
      ...cat,
      image: product ? product.image : "https://via.placeholder.com/300x300?text=No+Image"
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