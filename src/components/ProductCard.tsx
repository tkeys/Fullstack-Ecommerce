import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";

import ProductPage from "../pages/ProductPage";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

interface Category {
  id: string;
  name: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height={140}
        image={product.category.image}
        alt={product.title}
      ></CardMedia>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" LinkComponent={ProductPage}>
          View
        </Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
