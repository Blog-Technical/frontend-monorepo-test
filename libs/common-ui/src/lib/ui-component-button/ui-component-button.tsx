import styles from './ui-component-button.module.css';

/* eslint-disable-next-line */
export interface UiComponentButtonProps {
  text: string;
}

export function UiComponentButton(props: UiComponentButtonProps) {
  const { text } = props;
  return (
    <button className={styles.button} type="button">
      {text}
    </button>
  );
}

export default UiComponentButton;
