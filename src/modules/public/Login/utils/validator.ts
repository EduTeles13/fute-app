import * as yup from 'yup';

export const validator = yup.object().shape({
  username: yup.string().required('Nome da pelada é obrigatório'),
  password: yup.string().required('A senha é obrigatória'),
});
