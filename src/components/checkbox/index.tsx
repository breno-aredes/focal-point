import "@/styles/components/checkbox.scss";

const Checkbox = () => {
  return (
    <label className="custom-checkbox">
      <input type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
