import { AppBar, Container, Link, Toolbar, Typography } from "@mui/material";
import Head from "next/head";
import NextLink from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Ecommerce</title>
      </Head>

      <AppBar position="static" className="bg-[#283040]">
        <Toolbar>
          <NextLink href="/" passHref>
            <Link className="no-underline text-white">
              <Typography className="font-bold text-lg">Ecommerce</Typography>
            </Link>
          </NextLink>
          <div className="flex-grow"></div>
          <div className="space-x-4">
            <NextLink href="/cart" passHref>
              <Link className="no-underline text-white">Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link className="no-underline text-white">Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className="min-h-[80vh]">{children}</Container>
      <footer className="text-center">
        <Typography>All rights reserved</Typography>
      </footer>
    </div>
  );
}
