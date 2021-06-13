import Select from "react-select";

const SelectField = ({
  options,
  field,
  form,
  disabled,
  error,
  ...selectProps
}) => {
  const customStyles = {
    control: () => ({
      display: "flex",
      color: "black",
      padding: "11px 20px",
      border: error ? "1px solid #e9275a;" : "1px solid #c4c4c4",
      borderRadius: "2px",
      marginBottom: error ? "0" : "30px",
    }),
    menu: () => ({
      border: "1px solid #c4c4c4",
      margin: "0",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    indicatorsContainer: () => ({
      padding: "0",
    }),
    dropdownIndicator: () => ({
      padding: "0",
    }),
  };

  return (
    <Select
      styles={customStyles}
      options={options}
      name={field.name}
      value={
        options
          ? options.find((option) => option.value === field.value)
          : { label: "", value: "" }
      }
      onChange={(option) => form.setFieldValue(field.name, option)}
      onBlur={field.onBlur}
      isSearchable={false}
      isDisabled={disabled}
      {...selectProps}
    />
  );
};

export default SelectField;
