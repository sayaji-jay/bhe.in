"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getProductsData } from '@/lib/dataUtils';
import { useRouter } from 'next/navigation';
export default function ProductsPage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  
  const router = useRouter();

  useEffect(() => {
    getProductsData().then((data) => {
      setCategories(data.categories);
      setProducts(data.products);
    });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white pt-20">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 border border-blue-200 rounded-full opacity-20" />
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-blue-200 rounded-full opacity-20" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-200 rounded-full opacity-20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-px bg-blue-600/30" />
              <span className="text-sm font-medium tracking-wide uppercase text-blue-800">Our Products</span>
              <div className="w-8 h-px bg-blue-600/30" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Agricultural Solutions for{" "}
              <span className="text-blue-600 relative">
                Better Tomorrow
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-200 rounded" />
              </span>
            </h1>

            <p className="text-blue-700 text-lg mt-8">
              Discover our comprehensive range of agricultural products designed to enhance crop productivity and sustainability
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.category_id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 flex flex-col h-[360px] cursor-pointer"
                onClick={() => router.push(`/products/${category.category_id}`)}
              >
                <div className="relative h-48 overflow-hidden bg-blue-50">
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
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-blue-600 mb-4 text-sm line-clamp-2">
                    {category.description}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center justify-between w-full px-4 py-2 text-blue-700 border border-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {products.filter((p) => p.category_id === category.category_id).length} Products
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}