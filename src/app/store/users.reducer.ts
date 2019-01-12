import { UsersActions } from '../actions/users.actions';
import { Users } from '../entities/user';

const INITIAL_STATE: Users = {
  list: [],
};

export function UsersReducer(state: Users = INITIAL_STATE, action: any): any {
  let index, active, list;

  switch (action.type) {
    case UsersActions.USERS_GET:
      return Object.assign({}, state, { list: action.payload.list });

    case UsersActions.USERS_DELETE:
      list = state.list
        .filter(({ userId }) => userId !== action.payload.id);
      return Object.assign({}, state, { list });

    case UsersActions.USERS_ADD:
      state.list.push(action.payload.user);
      return state;

    case UsersActions.USERS_UPDATE:
      list = [...state.list];
      index = list.findIndex(({ userId }) => userId === action.payload.user.id);
      list[index] = action.payload.user;
      return Object.assign({}, state, { list });

    default:
      return state;
  }
}

