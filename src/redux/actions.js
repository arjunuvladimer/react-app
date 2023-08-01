// actions.js

export const setQuoteResponse = (quoteResponse) => {
    return {
      type: 'SET_QUOTE_RESPONSE',
      payload: quoteResponse,
    };
  };
  
// actions.js

export const SAVE_FORM_DATA = 'SAVE_FORM_DATA';

export const saveFormData = (formData) => ({
  type: SAVE_FORM_DATA,
  payload: formData,
});
