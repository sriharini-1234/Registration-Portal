function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched
}) {
  const hasError = touched && error;

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`input ${hasError ? "input-error" : ""}`}
      />

      {hasError && (
        <p className="error-text">{error}</p>
      )}
    </div>
  );
}

export default InputField;