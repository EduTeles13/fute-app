import * as yup from 'yup';

export const validator = yup.object().shape({
  email: yup.string().email('Formato de e-mail inválido').required('E-mail obrigatório'),
  peladaName: yup.string().required('Nome da pelada é obrigatório'),
  password: yup
    .string()
    .required('A senha é obrigatória')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'A senha deve conter caracteres especiais, letras maiúsculas, letras minúsculas e números',
    ),
  confirmPassword: yup
    .string()
    .required('A confirmação de senha é obrigatória')
    .oneOf([yup.ref('senha')], 'A confirmação de senha deve ser igual à senha'),
});
