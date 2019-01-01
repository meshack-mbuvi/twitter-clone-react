import * as React from "react";

interface IProps {
  className?: string;
  placeholder?: string;
  type?: string;
  id?: string;
  required?: boolean;
  onChange?: (e: any) => void;
}
export const TextArea: React.SFC<IProps> = ({
  className = "",
  placeholder = "",
  id = "",
  onChange,
  required = false
}) => {
  return (
    <div className="input-group mb-3">
      {" "}
      <textarea
        id={id}
        className={className}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        rows={3}
      />
    </div>
  );
};
