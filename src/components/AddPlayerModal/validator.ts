import * as yup from 'yup';

export const validator = yup.object().shape({
  name: yup.string().required('Nome do jogador é obrigatório'),
  isMonthlyPlayer: yup.boolean().required(),
  stars: yup.number().required('Número de estrelas é obrigatório'),
});
