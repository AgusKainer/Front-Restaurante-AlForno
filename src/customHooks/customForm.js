// import { useState } from "react";

// const useFormHook = (formInitial = {}) => {
//   const [form, setForm] = useState(formInitial);

//   const onChange = ({ target }) => {
//     const { name, value, type, checked, multiple, selectedOptions } = target;

//     let finalValue;

//     if (type === "checkbox") {
//       // ✅ Si es array, acumulamos o quitamos
//       if (Array.isArray(form[name])) {
//         finalValue = checked
//           ? [...form[name], value]
//           : form[name].filter((v) => v !== value);
//       } else {
//         finalValue = checked;
//       }
//     } else if (multiple && selectedOptions) {
//       finalValue = Array.from(selectedOptions, (opt) => opt.value);
//     } else if (type === "number") {
//       finalValue = Number(value);
//     } else {
//       finalValue = value;
//     }

//     setForm((prev) => ({
//       ...prev,
//       [name]: finalValue,
//     }));
//   };

//   return {
//     form,
//     onChange,
//   };
// };

// export default useFormHook;

import { useState } from "react";

const useFormHook = (formInitial = {}) => {
  const [form, setForm] = useState(formInitial);

  const onChange = ({ target }) => {
    const { name, value, type, checked, multiple, selectedOptions } = target;

    let finalValue;

    if (type === "checkbox") {
      if (Array.isArray(form[name])) {
        finalValue = checked
          ? Array.from(new Set([...form[name], value])) // ✅ sin duplicados
          : form[name].filter((v) => v !== value);
      } else {
        finalValue = checked;
      }
    } else if (multiple && selectedOptions) {
      finalValue = Array.from(selectedOptions, (opt) => opt.value);
    } else if (type === "number") {
      finalValue = Number(value);
    } else {
      finalValue = value;
    }

    setForm((prev) => ({
      ...prev,
      [name]: finalValue,
    }));
  };

  return {
    form,
    onChange,
  };
};

export default useFormHook;
