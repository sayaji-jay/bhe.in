export async function getProductsData() {
  const data = await import('../data/products.json');
  return data.default || data;
} 