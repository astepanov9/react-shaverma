import React from "react";
import styles from "./NotFoundBlock.module.scss";

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <span className={styles.emoji}>😓</span>
      <h2 className={styles.title}>Ничего не найдено :(</h2>
      <p className={styles.desc}>К сожалению, данная страница отсутствует в нашем интернет-магазине.</p>
    </div>
  );
}

export default NotFoundBlock;
