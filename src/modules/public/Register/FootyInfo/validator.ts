import * as yup from 'yup';

export const validator = yup.object().shape({
  startTime: yup.string().required('Horário de início obrigatório'),
  endTime: yup
    .string()
    .required('Horário de término obrigatório')
    .test(
      'is-greater',
      'O horário de término deve ser maior que o horário de início',
      function (endTime) {
        const { startTime } = this.parent; // Obtenha o valor do campo "startTime" do objeto sendo validado
        if (!startTime || !endTime) {
          // Se algum dos campos não estiver preenchido, não faça a validação
          return true;
        }
        // Converta as strings de horário em objetos Date para comparar
        const startTimeDate = new Date(`1970-01-01T${startTime}`);
        const endTimeDate = new Date(`1970-01-01T${endTime}`);
        return startTimeDate < endTimeDate;
      },
    ),
  playersPerTeam: yup.number().required('A quantidade de jogadores é obrigatória'),
  teamsQty: yup
    .number()
    .required('A confirmação de times é obrigatória')
    .test('is-minimum-2', 'Devem ter pelo menos 2 times por pelada', function (teamsQty) {
      return teamsQty >= 2;
    }),
});
