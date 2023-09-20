import * as yup from 'yup';

export const validator = yup.object().shape({
  name: yup.string().required('Nome do jogador é obrigatório'),
  presence: yup.boolean().required(),
  stars: yup.number().required('Número de estrelas é obrigatório'),
});
