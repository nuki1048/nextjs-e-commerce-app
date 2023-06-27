import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import CategoryGrid from "@/components/category-page/category-grid/category-grid";
import CategoryHeader from "@/components/category-page/category-header/category-header";
import CategoryLinks from "@/components/categoryLinks/CategoryLinks";
import Container from "@/components/container/Container";
import Info from "@/components/home-page/info/info";

const CategoryPage = () => {
  const { query } = useRouter();
  return (
    <>
      <CategoryHeader title={query.categoryName} />
      <CategoryGrid />
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
