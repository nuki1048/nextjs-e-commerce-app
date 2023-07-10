import { useRouter } from "next/router";
import CategoryGrid from "@/components/category-page/category-grid/category-grid";
import CategoryHeader from "@/components/category-page/category-header/category-header";
import CategoryLinks from "@/components/categoryLinks/CategoryLinks";
import Container from "@/components/container/Container";
import Info from "@/components/home-page/info/info";
import { checkEnvironment } from "@/lib/url";
import { connectToDatabase, getDocuments } from "@/lib/db";

const CategoryPage = ({ products }) => {
  const { query } = useRouter();
  return (
    <>
      <CategoryHeader title={query.categoryName} />
      <CategoryGrid data={products} />
      <Container>
        <div className="margin">
          <CategoryLinks />
        </div>
      </Container>
      <Info />
    </>
  );
};

export default CategoryPage;

export async function getStaticProps(context) {
  const query = context.params.categoryName;
  let client;

  try {
    client = await connectToDatabase();
  } catch (error) {
    return {
      notFound: true,
    };
  }

  const data = await getDocuments(client, { category: query }, "products");
  return {
    props: { products: JSON.parse(JSON.stringify(data)) },
  };
}

export async function getStaticPaths() {
  let client;
  try {
    client = await connectToDatabase();
  } catch (error) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
  const data = await getDocuments(client, {}, "products");
  const categories = data.map((item) => item.category);
  const setOfCategories = new Set(categories);
  const paths = Array.from(setOfCategories).map((item) => ({
    params: { categoryName: item },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}
