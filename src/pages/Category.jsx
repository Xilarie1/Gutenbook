import { useParams } from "react-router-dom";

function Category() {
  const { categoryName } = useParams();

  return (
    <div>
      <h2>Category: {categoryName}</h2>
      <p>Here we will list all books for the {categoryName} category.</p>
    </div>
  );
}

export default Category;
