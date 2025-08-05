export const validateRegisterForm = (data) => {
  const errors = {};
  if (!data.email?.trim()) errors.email = 'Email is required.';
  else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Enter a valid email.';

  if (!data.username?.trim()) errors.username = 'Full name is required.';

  if (!data.password) errors.password = 'Password is required.';
  else if (data.password.length < 6) errors.password = 'Password must be at least 6 characters.';

  return errors;
};

export const validateLoginForm = (data) => {
  const errors = {};
  if (!data.email?.trim()) errors.email = 'Email is required.';
  if (!data.password) errors.password = 'Password is required.';
  return errors;
};
