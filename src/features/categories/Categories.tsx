import { v4 } from 'uuid';

import styles from './categories.module.css';

interface ICategoriesProps {
  categories: string[];
  filterItems: (category: string) => void;
}

const Categories = (props: ICategoriesProps) => {
  const { categories, filterItems } = props;

  return (
    <div className={styles.btnContainer}>
      {categories.map((category) => {
        return (
          <button
            type={'button'}
            className={'btn'}
            key={v4()}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
