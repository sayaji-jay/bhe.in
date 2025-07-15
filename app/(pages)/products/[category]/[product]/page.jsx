"use client";
import React from 'react'
import { useParams } from 'next/navigation';
import { getProductsData } from '@/lib/dataUtils';
const page = () => {
  const params = useParams();
  const category = params.category;
  const product = params.product;
  console.log(category, product);
  return (
    <div>page</div>
  )
}

export default page