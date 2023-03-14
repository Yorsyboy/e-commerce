import React from 'react'
import { useRouter } from 'next/router'
import data from '../../utlis/data'
import Layout from '../../../components/Layout'
import { Button, Card, Grid, Link, List, ListItem, Typography } from '@mui/material'
import Image from 'next/image'

export default function ProductDetail() {
    const router = useRouter()
    const { slug } = router.query
    const product = data.products.find((x) => x.slug === slug) // find the product that matches the slug
    if (!product) {
        return <div>Product Not Found</div>
    }
    return <Layout title={product.name} description={product.description}>
        <div className='mt-2 mb-2'>
            <Link className='no-underline hover:underline' href="/">Back to products</Link>
        </div>

        <Grid container spacing={1}>

            <Grid item md={6} xs={12}>
                <Image src={product.image} alt={product.name} width={640} height={640} />
            </Grid>

            <Grid item md={3} xs={12}>
                <List>
                    <ListItem>
                        <Typography component="h1">{product.name}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>Category: {product.category}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>Brand: {product.brand}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>Rating: {product.rating} stars ({product.numReviews} reviews)</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>Description: {product.description}</Typography>
                    </ListItem>
                </List>
            </Grid>

            <Grid item md={3} xs={12}>
                <Card>
                    <List>
                        <ListItem>
                            <Grid container>
                                <Grid item xs={6}><Typography>Price</Typography></Grid>
                                <Grid item xs={6}><Typography>${product.price}</Typography></Grid>
                            </Grid>
                        </ListItem>
                        <ListItem>
                            <Grid container>
                                <Grid item xs={6}><Typography>Status</Typography></Grid>
                                <Grid item xs={6}><Typography>{product.countInStock > 0 ? 'In Stock' : 'Unavailable'}</Typography></Grid>
                            </Grid>
                        </ListItem>
                        <ListItem>
                            <Button className='bg-blue-500 hover:bg-blue-900' fullWidth variant='contained'>Add to Cart</Button>
                        </ListItem>
                    </List>
                </Card>
            </Grid>
        </Grid>


    </Layout>
}
