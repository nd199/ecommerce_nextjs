import styles from "./page.module.css";
import Category from "@/components/categories/Category";

const CategoryPage = () => {
  return (
    <div className={styles.page}>
      <Category />
    </div>
  );
};

export default CategoryPage;
