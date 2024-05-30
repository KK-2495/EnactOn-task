import { getProducts } from "@/actions/productActions";
import { DEFAULT_PAGE_SIZE } from "../../../constant";
import PaginationSection from "@/components/PaginationSection";
import SortBy from "@/components/SortBy";
import Filter from "@/components/Filter";
import ProductTable from "@/components/ProductTable";
import { Suspense } from "react";
import { getCategories } from "@/actions/categoryActions";
import { getBrands } from "@/actions/brandActions";

export default async function Products({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { page = 1, pageSize = DEFAULT_PAGE_SIZE } = searchParams as any;

  const genderValue = searchParams?.gender || "";
  const sortByValue = searchParams?.sortBy || "";
  const categoryIdValue = searchParams?.categoryId || "";
  const priceRangeToValue = searchParams?.priceRangeTo || "";
  const discountValue = searchParams?.discount || "";
  const brandIdValue = searchParams?.brandId || "";
  const occasionsValue = searchParams?.occasions || "";

  const { products, lastPage, numOfResultsOnCurPage } = await getProducts(
    +page,
    +pageSize,
    genderValue,
    sortByValue,
    categoryIdValue,
    priceRangeToValue,
    discountValue,
    brandIdValue,
    occasionsValue
  );

  const brands = await getBrands();
  // console.log(products, "brands test");
  const categories = await getCategories();
  return (
    <div className="pb-20 pt-8">
      <h1 className="text-4xl mb-8">Product List</h1>
      <div className="mb-8">
        <SortBy />
        <div className="mt-4">
          <Filter categories={categories} brands={brands} />
        </div>
      </div>

      <h1 className="text-lg font-bold mb-4">Products</h1>
      <Suspense
        // key={genderValue + sortByValue}
        fallback={<p className="text-gray-300 text-2xl">Loading Products...</p>}
      >
        <ProductTable
          products={products}
          numOfResultsOnCurPage={numOfResultsOnCurPage}
        />
      </Suspense>
      {products.length > 0 && (
        <PaginationSection
          lastPage={lastPage}
          pageNo={+page}
          pageSize={+pageSize}
        />
      )}
    </div>
  );
}
