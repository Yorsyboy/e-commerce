import data from "../src/utlis/data";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <h1>Products</h1>
      <Grid container spacing={3}>
        {data.products.map((product) => (
          <Grid item md={4} key={product.name}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={product.image}
                  title={product.name}
                />
                <CardContent>
                    <Typography>
                        {product.name}
                    </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Typography>
                    ${product.price}
                </Typography>
                <Button size="small" color="primary">
                    Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
