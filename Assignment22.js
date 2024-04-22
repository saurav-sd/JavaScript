// Format backend validation message to frontend format
const backendErrors = {
  email: {
    errors: [{ message: "Can't be blank" }],
  },
  password: {
    errors: [
      { message: "Must contain symbols in different case" },
      { message: "Must be at least 8 symbols length" },
    ],
  },
  passwordConfirmation: {
    errors: [{ message: "Must match with password" }],
  },
};

// Result
// [
// "Email: Can't be blank",
// "Password: Must contain symbols in different case, Must be at least 8 symbols length",
// "PasswordConfirmation: Must match with password"
// ]


const readabelBackendErrors = Object.entries(backendErrors).map(([field, value]) => {
    const fieldMessages = value.errors.map(error => error.message).join(" ");
    const capitalizeField = field.charAt(0).toUpperCase() + field.slice(1);
    return `${capitalizeField}: ${fieldMessages}`;
})

console.log(readabelBackendErrors);