import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import styles from './modal.module.css';

function Index(props) {
  return ReactDOM
    .createPortal(
      <ModalInner {...props} />,
      document.querySelector("#modal")
    );
}

function ModalInner(props) {
  return (
    <div className={classNames(styles.modal)}>
      <div className={classNames(styles.window)}>
        {props.children}
      </div>
    </div>
  );
}
export default Index;