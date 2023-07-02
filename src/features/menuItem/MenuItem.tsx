import styles from './menuItem.module.css';

export interface IMenuItem {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

const MenuItem = (props: IMenuItem) => {
  const { title, price, img, desc } = props;

  return (
    <article className={styles.menuItem}>
      <img src={img} alt={title} className={styles.img} />
      <div className={styles.itemInfo}>
        <header>
          <h5>{title}</h5>
          <span className={styles.itemPrice}>${price}</span>
        </header>
        <p className={styles.itemText}>{desc}</p>
      </div>
    </article>
  );
};

export default MenuItem;
