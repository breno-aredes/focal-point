import React from "react";
import ReactModal from "react-modal";

import "@/styles/components/modal.scss";
import { ModalProps } from "@/types/components/modalTypes";

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(237, 237, 237, 0.80)",
    zIndex: 1000,
    backdropFilter: "blur(1px)",
  },
  content: {
    border: "none",
    display: "flex",
    marginTop: "1.5rem",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    overflow: "none",
  },
};

const Modal: React.FC<ModalProps> = ({ modalVisible, children }) => {
  return (
    <ReactModal style={styles as any} isOpen={modalVisible}>
      <div className="modalBody">{children}</div>
    </ReactModal>
  );
};

export default Modal;
