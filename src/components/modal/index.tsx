import React, { useEffect, useState } from "react";
import ReactModal, { Styles } from "react-modal";

import "@/styles/components/modal.scss";
import { ModalProps } from "@/types/components/modalTypes";

const baseStyles: Styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(237, 237, 237, 0.80)",
    zIndex: 1000,
    backdropFilter: "blur(1px)",
    display: "flex",
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
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsFullScreen(window.innerWidth < 500);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fullScreenStyles: Styles = {
    overlay: baseStyles.overlay,
    content: {
      ...baseStyles.content,
      margin: 0,
      width: "100%",
      height: "100%",
      padding: 0,
      justifyContent: "start",
      alignItems: "start",
    },
  };

  return (
    <ReactModal
      style={isFullScreen ? fullScreenStyles : baseStyles}
      isOpen={modalVisible}
    >
      <div className="modalBody">{children}</div>
    </ReactModal>
  );
};

export default Modal;
