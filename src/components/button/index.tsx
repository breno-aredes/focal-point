import styles from "@/styles/components/button.module.scss";
import { ButtonProps } from "@/types/components/buttonTypes";

const Button = ({ children, variant, ...props }: ButtonProps) => {
  const getButtonColor = () => {
    switch (variant) {
      case "cancel":
        return styles.cancelButton;
      case "save":
        return styles.saveButton;
      case "delete":
        return styles.deleteButton;
      default:
        return "";
    }
  };

  return (
    <button className={`${styles.button} ${getButtonColor()}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
