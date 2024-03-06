export const formValidate = (name, email, message) => {
  let validationError = {};
  if (!name.trim()) {
    validationError.name = "Please enter your name.";
  } else if (name.length < 3) {
    validationError.name = "Name must be atleast 3 characters long.";
  } else if (typeof name !== "string") {
    validationError.name = "Please use alphabets in name.";
  } else if (/^\d+$/.test(name)) {
    validationError.name = "Name should not contain any numbers.";
  } else if (!/^[A-Z]/.test(name)) {
    validationError.name = "Name must start with a capital letter.";
  }

  if (!email.trim()) {
    validationError.email = "Please enter your email.";
  } else if (
    typeof email !== "string" ||
    !/^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}$/i.test(email)
  ) {
    validationError.email = "Please enter a valid email.";
  }

  if (!message.trim()) {
    validationError.message = "Please enter your message.";
  } else if (message.length < 100) {
    validationError.message = "Message must be atleast 100 characters long.";
  }

  return validationError;
};
