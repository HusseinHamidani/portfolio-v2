export const open_action = (payload) => {
     return {
          type: 'OPEN',
          payload: payload,
     };
};
export const close_action = (payload) => {
     return {
          type: 'CLOSE',
          payload: payload,
     };
};
