import * as AuthAction from "./auth.action";

export interface State {
  token: string,
  authenticated: boolean
}
const initialState: State = {
    token: null,
    authenticated: false
}
export function authReducer(state = initialState, action: AuthAction.AuthAction) {
  switch (action.type) {
    case (AuthAction.SIGNUP):
    case (AuthAction.SIGNIN):
      return {
        ...state,
        autheticated: true
      };
    default:
      return state;
  }
}
