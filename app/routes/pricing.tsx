import { PricingBody, Navbar } from "~/components";
import type { MetaFunction } from "@remix-run/node";
import { Helmet } from "react-helmet";

export const meta: MetaFunction = () => {
  return [{ title: "proto.id | Pricing" }];
};

export default function Products() {
  const navData = [
    {
      bgcolor: "#F5FFFA",
      textcolor: "#121212",
      name: "pricing",
      links: [
        { index: 1, url: "/", pgName: "home" },
        { index: 2, url: "/products", pgName: "products" },
        { index: 3, url: "/pricing", pgName: "pricing" },
        { index: 4, url: "/about", pgName: "about" },
      ],
    },
  ];
  return (
    <main style={{ backgroundColor: "#121212" }}>
      <Helmet>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"
          async
        ></script>
      </Helmet>
      {navData.map((data) => (
        <Navbar
          key="pricing"
          navID="pricingNav"
          navType="navbar-expand-xxl bg-body-primary"
          bgColor={data.bgcolor}
          textColor={data.textcolor}
          navName={data.name}
          navLinks={data.links}
        />
      ))}
      <PricingBody />
    </main>
  );
}
