export const rulesNombre = {
  required: {
    value: true,
    message: "El nombre es obligatorio",
  },
  minLength: {
    value: 3,
    message: "El nombre debe tener mínimo 3 caracteres",
  },
  maxLength: {
    value: 50,
    message: "El nombre debe tener máximo 50 caracteres",
  },
  validate: (value) => {
    return (
      /^[a-zA-Z\u00C0-\u017F ]+$/.test(value) ||
      "El formato del nombre no es válido"
    );
  },
};

export const rulesCorreo = {
  required: {
    value: true,
    message: "El correo es obligatorio",
  },
  pattern: {
    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    message: "El formato del correo no es válido",
  },
};

export const rulesPassword = {
  required: {
    value: true,
    message: "La contraseña es obligatoria",
  },
  minLength: {
    value: 6,
    message: "La contraseña debe tener mínimo 6 caracteres",
  },
  maxLength: {
    value: 30,
    message: "La contraseña debe tener máximo 30 caracteres",
  },
};

export const rulesConfirmarPassword = (watch) => {
  return {
    required: {
      value: true,
      message: "Debes confirmar la contraseña",
    },
    validate: (value) => {
      if (value == watch("password")) {
        return true;
      } else {
        return "No coincide con la contraseña";
      }
    },
  };
};

export const rulesTelefono = {
  required: {
    value: true,
    message: "El número de teléfono es obligatorio",
  },
  minLength: {
    value: 5,
    message: "El teléfono debe tener mínimo 5 caracteres",
  },
  maxLength: {
    value: 10,
    message: "El teléfono debe tener máximo 10 caracteres",
  },
  pattern: {
    value: /^\d+$/,
    message: "Ingresa sólo números",
  },
};
