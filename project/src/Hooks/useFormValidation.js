import { useState } from "react";

const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const validateName = (name) => {
    return name.length > 3 && !/\d/.test(name);
  };

  const validateSurname = (surname) => {
    return surname.length > 3 && !/\d/.test(surname);
  };

  const validateForm = (formData, formType) => {
    const newErrors = {};

    if (formType === "signin") {
      if (!validateEmail(formData.email)) {
        newErrors.email = "Invalid email format";
      }

      if (!validatePassword(formData.password)) {
        newErrors.password =
          "Password must be at least 8 characters long and contain at least one number";
      }
    } else if (formType === "signup") {
      if (!validateName(formData.name)) {
        newErrors.name =
          "Name must be at least 4 characters long and not contain numbers";
      }

      if (!validateSurname(formData.surname)) {
        newErrors.surname =
          "Surname must be at least 4 characters long and not contain numbers";
      }

      if (!validateEmail(formData.email)) {
        newErrors.email = "Invalid email format";
      }

      if (!validatePassword(formData.password)) {
        newErrors.password =
          "Password must be at least 8 characters long and contain at least one number";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return { errors, validateForm };
};

export default useFormValidation;
