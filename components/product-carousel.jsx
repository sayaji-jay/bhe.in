"use client"

import React, { useEffect, useState } from 'react';
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
import { getProductsData } from '@/lib/dataUtils';

export default function ProductCarousel({ products: initialProducts, categories: initialCategories }) {
  const [products, setProducts] = useState(initialProducts || []);
  const [categories, setCategories] = useState(initialCategories || []);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!initialProducts || !initialCategories) {
      getProductsData().then((data) => {
        setProducts(data.products);
        setCategories(data.categories);
      });
    }
  }, [initialProducts, initialCategories]);

  const handleCategoryClick = async (categoryId) => {
    setIsLoading(true);
    setSelectedCategory(categoryId);
    let newProducts;
    if (!categoryId) {
      newProducts = initialProducts || (await getProductsData()).products;
    } else {
      const allProducts = initialProducts || (await getProductsData()).products;
      newProducts = allProducts.filter(p => p.category_id === categoryId);
    }
    setTimeout(() => {
      setProducts(newProducts);
      setIsLoading(false);
    }, 400);
  };

  const selectedCategoryData = selectedCategory
    ? categories.find((cat) => cat.category_id === selectedCategory)
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
        {categories.map((category) => (
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
                      <p className="text-xs text-gray-500 mt-2">{categories.find(c => c.category_id === product.category_id)?.title || product.category_id}</p>
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