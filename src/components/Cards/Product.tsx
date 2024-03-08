import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/models/Products";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card>
      <CardHeader className="p-4">
        <div style={{ position: "relative", width: "100%", height: "150px" }}>
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 grid gap-2">
        <p className="text-sm font-medium">
          {product.title} ({product.rating} ★) - {product.price} €
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {product.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
