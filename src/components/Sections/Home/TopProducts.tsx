"use client";

import ProductCard from "@/components/Cards/Product";
import { ProductsResponse } from "@/models/Products";
import { useQuery } from "@tanstack/react-query";

const fetchTopProducts = () =>
  fetch("https://dummyjson.com/products?limit=8").then((res) => res.json());

export default function TopProducts() {
  const { data } = useQuery<ProductsResponse, Error>({
    queryKey: ["topProducts"],
    queryFn: fetchTopProducts,
  });

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {data.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
