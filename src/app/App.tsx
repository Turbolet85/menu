import { useState } from 'react';

import menu from '../../public/data';
import Categories from '../features/categories/Categories';
import Menu from '../features/menu/Menu';
import Title from '../features/ui/title/Title';
import styles from './app.module.css';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories] = useState(allCategories);

  const filterItems = (category: string) => {
    const newItems = menu.filter((item) => item.category === category);
    category === 'all' ? setMenuItems(menu) : setMenuItems(newItems);
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
