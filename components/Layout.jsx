import { AppBar, Container, Link, Toolbar, Typography } from "@mui/material";
import Head from "next/head";

export default function Layout({ title, description, children }) {
  return (
    <div>
      <Head>
        {/* { If title is true, then use the title, otherwise use 'Ecommerce'} */}
        <title>{title ? `${title} - Ecommerce` : 'Ecommerce'}</title>
        {/**For SEO */}
        {description && <meta name="description" content={description} />}
      </Head>

      <AppBar position="static" className="bg-[#283040]">
        <Toolbar>
          <Link href="/" className="no-underline text-white">
            <Typography className="font-bold text-lg">Ecommerce</Typography>
          </Link>
          <div className="flex-grow"></div>
          <div className="space-x-4">
            <Link href="/cart" className="no-underline text-white">
              Cart
            </Link>
            <Link href="/login" className="no-underline text-white">
              Login
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Container className="min-h-[80vh]">{children}</Container>
      <footer className="text-center mt-2">
        <Typography>All rights reserved</Typography>
      </footer>
    </div>
  );
}
