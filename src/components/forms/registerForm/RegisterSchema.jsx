import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
  .min(2, 'Name must be at least 2 characters')
  .max(32, 'Name must be at most 32 characters')
  .required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
  .min(8, 'Password must be at least 8 characters')
  .max(64, 'Password must be at most 64 characters')
  .required('Password is required'),
});

export default RegisterSchema;