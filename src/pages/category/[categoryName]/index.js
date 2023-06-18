import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "@/store/couter";

const CategoryPage = () => {
  const router = useRouter();
  console.log(router.query.categoryName);
  const dispatch = useDispatch();
  const actions = useSelector((state) => state.counter);
  useEffect(() => {
    dispatch(increment());
  }, [dispatch]);

  console.log(actions);
  return <div>hello</div>;
};

export default CategoryPage;
