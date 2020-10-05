
const signInReducer = (state, action) => {
    switch (action.type) {
      case 'field': {
        return {
          ...state,
          [action.fieldName]: action.payload,
        };
      }
      case 'login': {
        return {
          ...state,
          error: '',
          isLoading: true,
        };
      }
      case 'success': {
        return {
          ...state,
          isSignedUp: true,
          isLoading: false,
        };
      }
      case 'error': {
        return {
          ...state,
          error: 'Invalid input',
          isSignedUp: false,
          isLoading: false,
          email: '',
          password: '',
          
        };
      }
      case 'logOut': {
        return {
          ...state,
          isSignedUp: false,
        };
      }
      default:
        return state;
    }
}
  
export default signInReducer;