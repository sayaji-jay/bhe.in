"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// Dummy data for products and categories
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
  { category_id: "electronics", title: "Electronics" },
  { category_id: "sports", title: "Sports" },
  { category_id: "kitchen", title: "Kitchen" },
  { category_id: "fashion", title: "Fashion" }
];

export default function ProductCarousel() {
  // Use dummy data directly
  const productsData = dummyProducts;
  const categoriesData = dummyCategories;

  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [products, setProducts] = React.useState(productsData);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleCategoryClick = async (categoryId) => {
    setIsLoading(true);
    setSelectedCategory(categoryId);
    // If you want to simulate async fetch, you can use setTimeout here
    // For now, just filter dummy data
    let newProducts;
    if (!categoryId) {
      newProducts = productsData;
    } else {
      newProducts = productsData.filter(p => p.category_id === categoryId);
    }
    setTimeout(() => {
      setProducts(newProducts);
      setIsLoading(false);
    }, 400); // Simulate loading
  };

  const selectedCategoryData = selectedCategory
    ? categoriesData.find((cat) => cat.category_id === selectedCategory)
    : null;

  const getCarouselItemClass = () =>
    'pl-2 md:pl-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4';

  return (
    <div className="w-full px-4 py-8">
      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 justify-center mb-8 max-w-[1200px] mx-auto">
        <Button
          variant={!selectedCategory ? 'default' : 'outline'}
          className="rounded-full hover:bg-primary hover:text-white transition-colors"
          onClick={() => handleCategoryClick(null)}
          disabled={isLoading}
        >
          All Categories
        </Button>
        {categoriesData.map((category) => (
          <Button
            key={category.category_id}
            variant={selectedCategory === category.category_id ? 'default' : 'outline'}
            className="rounded-full hover:bg-primary hover:text-white transition-colors"
            onClick={() => handleCategoryClick(category.category_id)}
            disabled={isLoading}
          >
            {category.title}
          </Button>
        ))}
      </div>

      {/* Section Title */}
      <h2 className="text-2xl font-bold text-center mb-8">
        {selectedCategoryData
          ? `Featured ${selectedCategoryData.title} Products`
          : 'Featured Products'}
      </h2>

      {/* Product Carousel */}
      <Carousel
        opts={{ align: 'start', loop: true }}
        className="w-full max-w-[1200px] mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-3">
          {products.map((product) => (
            <CarouselItem
              key={product.product_name}
              className={getCarouselItemClass()}
            >
               <Link href={`/products/${product.category_id.toLowerCase().replace(/[^a-z0-9]+/g, '-')}/${product.product_name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                <Card className="h-full transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden rounded-t-xl flex items-center justify-center bg-gray-50">
                      <Image
                        src={product.image}
                        alt={product.product_name}
                        width={280}
                        height={280}
                        className="object-contain transition-transform duration-300 hover:scale-105 max-w-full max-h-full"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        priority
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-1 line-clamp-1">{product.product_name}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{product.composition}</p>
                      <p className="text-xs text-gray-500 mt-2">{product.category}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
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
  );
}