import { useDispatch, useSelector } from 'react-redux';

import menu from '../../public/data';
import Categories from '../features/categories/Categories';
import Menu from '../features/menu/Menu';
import { setMenu } from '../features/menu/menuSlice';
import Title from '../features/ui/title/Title';
import styles from './app.module.css';
import { RootState } from './rootReducer';

export const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

function App() {
  const dispatch = useDispatch();
  const menuItems = useSelector((state: RootState) => state.menu);
  const categories = useSelector((state: RootState) => state.categories);

  const filterItems = (category: string) => {
    const newItems = menu.filter((item) => item.category === category);
    if (category === 'all') {
      dispatch(setMenu(menu));
    } else {
      dispatch(setMenu(newItems));
    }
  };

  return (
    <main>
      <section className={styles.menu}>
        <Title text={'Our Menu'} />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
