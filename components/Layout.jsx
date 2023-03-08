import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Ecommerce</title>
      </Head>

      <AppBar position="static" className="bg-[#283040]">
        <Toolbar>
          <Typography>Ecommerce</Typography>
        </Toolbar>
      </AppBar>
      <Container className="min-h-[80vh]">{children}</Container>
      <footer className="text-center">
        <Typography>All rights reserved</Typography>
      </footer>
    </div>
  );
}
