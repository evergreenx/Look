export const CustomSelectStyles = {
  container: (provided) => ({
    ...provided,

    borderRadius: "40px",
    background: "#fff",

    width: "200px",
    border: "2px solid rgba(203, 64, 181, 1)",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    position: "relative",

    boxSizing: "border-box",
  }),

  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    color: state.selectProps.menuColor,
    padding: 5,
    background: "#fff",
  }),

  control: (_, { selectProps: { width } }) => ({
    width: width,
    display: "flex",
  }),

  singleValue: (provided, state) => ({
    ...provided,
    color: "#037ACF",
    fontWeight: 500,
  }),

  placeholder: (provided, state) => ({
    ...provided,
    color: "#ddd",
    fontWeight: 500,
  }),
  option: (provided, state) => ({
    ...provided,
    color: "#037ACF",
    fontWeight: 500,
  }),
  IndicatorsContainer: (provided, state) => ({
    ...provided,
    display: "none",
  }),

  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: "none",
  }),
};
