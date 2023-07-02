import styles from './title.module.css';

interface ITitleProps {
  text: string;
}
const Title = ({ text }: ITitleProps) => {
  return (
    <div className={styles.title}>
      <h2>{text || 'Default title'}</h2>
      <div className={styles.titleUnderline}></div>
    </div>
  );
};

export default Title;
