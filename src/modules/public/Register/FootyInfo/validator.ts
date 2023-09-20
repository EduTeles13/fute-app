import * as yup from 'yup';

export const validator = yup.object().shape({
  name: yup.string().required('NOme da pelada é obrigatório'),
  location: yup.string().required('Localização é obrigatório'),
  startTime: yup.string().required('Horário de início obrigatório'),
  endTime: yup
    .string()
    .required('Horário de término obrigatório')
    .test(
      'is-greater',
      'O horário de término deve ser maior que o horário de início',
      function (endTime) {
        const { startTime } = this.parent;
        if (!startTime || !endTime) {
          return true;
        }
        const startTimeDate = new Date(startTime);
        const endTimeDate = new Date(endTime);
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
