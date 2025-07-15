"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getProductsData } from '@/lib/dataUtils';
import { useRouter } from 'next/navigation';
import { Badge } from "@/components/ui/badge"


// Minimal ProductCard component for displaying product info
const ProductCard = ({ product, router }) => (
  <div 
  className="border rounded-lg p-6 bg-white shadow flex flex-col items-center"
  onClick={() => router.push(`/products/${product.category_id}/${product.slug}`)}
  >
    <img src={product.image} alt={product.product_name} className="w-32 h-32 object-cover mb-4 rounded" />
    <h2 className="text-lg font-semibold mb-2 text-blue-900">{product.product_name}</h2>
    <p className="text-gray-600 text-sm mb-2 text-center">{product.application}</p>
    <Badge variant="outline" className="mb-2">Size : {product.size}</Badge>
    <Badge variant="outline" className="mb-2">Material : {product.material}</Badge>
  </div>
);

const Page = () => {
  const params = useParams();
  const category = params.category;
  const [products, setProducts] = useState([]);
  const [categoryDetails, setCategoryDetails] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  useEffect(() => {
    let isMounted = true;
    getProductsData()
      .then((data) => {
        if (!isMounted) return;
        const cat = data.categories.find((c) => c.category_id === category);
        setCategoryDetails(cat || null);
        if (cat) {
          setProducts(data.products.filter((p) => p.category_id === category));
        } else {
          setProducts([]);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError('Error loading category data');
        }
      });
    return () => { isMounted = false; };
  }, [category]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!categoryDetails) {
    return <div>Category not found</div>;
  }

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
              <span className="text-sm font-medium tracking-wide uppercase text-blue-800">
                {/* If you want to show an icon, add it to your category data and use here */}
                {categoryDetails.icon && <span className="mr-1">{categoryDetails.icon}</span>}
                {categoryDetails.title}
              </span>
              <div className="w-8 h-px bg-blue-600/30" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Precision Engineered{" "}
              <span className="text-blue-600 relative">
                {categoryDetails.title}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-200 rounded" />
              </span>
            </h1>


            <p className="text-blue-700 text-lg">
              {categoryDetails.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.product_name} product={product} router={router} />
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-blue-700">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Page;
