import { Layout } from "@/app/components/Layout";
import { Home } from "@/features/home";
import { SEOMetaTags } from "@/app/components/SEOMetaTags";
import { GetServerSideProps, NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <SEOMetaTags
        title={"Initial Wallet MVP"}
        // add here an image for SEO
        // imgUrl={some image url}
        keywords={`Fixcoin, Payback, Fidelity, Tokens, Blockchain`}
      />
      {/* @ts-ignore */}
      <Home />
    </Layout>
  );
};

export default function Page() {
  // @ts-ignore
  return <HomePage />;
}
