import styles from './ui-theme.module.css';

/* eslint-disable-next-line */
export interface UiThemeProps {}

export function UiTheme(props: UiThemeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiTheme!</h1>
    </div>
  );
}

export default UiTheme;
