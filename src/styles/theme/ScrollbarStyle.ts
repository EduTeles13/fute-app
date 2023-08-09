export const ScrollbarStyle = {
  '::-webkit-scrollbar': {
    width: '0.4rem',
    height: '0.4rem',
    marginLeft: '3rem',
  },
  '::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 10px 10px #E2E8F0',
    border: 'solid 1px transparent',
    borderRadius: '2.4rem',
  },
  '::-webkit-scrollbar-thumb': {
    boxShadow: 'inset 0 0 10px 10px primary.300',
    background: 'primary.300',
    borderRadius: '2.4rem',
  },
  scrollbarColor: 'primary.300',
};
