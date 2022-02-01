export const controlReducer = (state = 'main_home', { type, paylaod }) => {
     switch (type) {
          case 'OPEN':
               return (state = 'App');
          case 'CLOSE':
               return (state = 'main_home main_home_overflow');
          default:
               return state;
     }
};
