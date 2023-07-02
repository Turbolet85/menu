import MenuItem from '../menuItem/MenuItem';
import styles from './menu.module.css';
import { IMenuItem } from './menuSlice';

export interface IMenuProps {
  items: IMenuItem[];
}

const Menu = (props: IMenuProps) => {
  const { items } = props;
  return (
    <div className={styles.sectionCenter}>
      {items.map((item) => {
        return <MenuItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Menu;
