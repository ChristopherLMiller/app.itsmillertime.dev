import { FC } from "react";
import useDynamicContent from "src/lib/context/dynamicContent";

export interface category {
  attributes: {
    title: string;
    slug: string;
  };

  id: number;
}

export interface CategoriesListTypes {
  categories: [category];
}
const CategoriesList: FC<CategoriesListTypes> = ({ categories }) => {
  const { setCategory } = useDynamicContent();

  return (
    <ul>
      {categories.map((categoryItem) => (
        <li key={categoryItem.id}>
          <a type="button" onClick={() => setCategory(categoryItem?.slug)}>
            {categoryItem?.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export { CategoriesList };
