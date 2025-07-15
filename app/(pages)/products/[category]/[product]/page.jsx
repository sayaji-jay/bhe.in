"use client";
import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // ✅ Use 'next/link' not 'lucide-react'

import { useParams } from "next/navigation";
import { getProductsData } from "@/lib/dataUtils";

const Page = () => {
  const [productData, setProductData] = useState(null);
  const params = useParams();

  const category = params?.category;
  const slug = params?.product;

  useEffect(() => {
    getProductsData().then((data) => {
      const found = data.products.find((p) => p.slug === slug);
      setProductData(found);
    });
  }, [slug]);

  if (!productData) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-emerald-50/20 pt-24 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Back Button */}
        <Link href={`/products/${productData.category_id}`}>
          <Button
            variant="ghost"
            className="mb-6 text-blue-700 pt-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {productData.category_id.charAt(0).toUpperCase() + productData.category_id.slice(1)}
          </Button>
        </Link>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Product Image */}
          <Card className="overflow-hidden shadow-lg border-0 bg-gradient-to-br from-white to-blue-50/30">
            <CardContent className="p-8">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-emerald-100 shadow-inner">
                <Image
                  src={productData.image}
                  alt={productData.product_name}
                  fill
                  className="object-contain p-6 transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Product Info + Key Benefits + Packaging + Usage */}
          <div className="space-y-6">
            {/* Product Header Info */}
            <div>
              <Badge
                variant="secondary"
                className="mb-4 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-800 hover:from-blue-200 hover:to-emerald-200 px-3 py-1 text-sm font-medium"
              >
                {productData.category_id.charAt(0).toUpperCase() + productData.category_id.slice(1)}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-800 to-emerald-700 bg-clip-text text-transparent mb-4 leading-tight">
                {productData.product_name}
              </h1>
              <p className="text-md text-blue-600 mb-6 font-medium">{productData.application}</p>
            </div>

            {/* Available Packaging */}
            <div className="grid grid-cols-1 gap-4">
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors">
                Size : {productData.size}
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors">
                Material : {productData.material}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
