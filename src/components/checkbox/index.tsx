import React, { useState, useEffect } from "react";
import "@/styles/components/checkbox.scss";
import { CheckboxProps } from "@/types/components/checkBoxTypes";

const Checkbox = ({ task, isChecked, onCheckChange }: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setChecked(checked);
    onCheckChange(task, checked);
  };

  return (
    <label className="custom-checkbox">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
