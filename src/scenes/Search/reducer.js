import * as actions from './actions';

const defaultState = {
  query: '',
  tempQuery: '',
  items: [],
  totalItems: 0,
  pageSize: 10,
  loading: false,
  error: null
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.QUERY_CHANGE: {
      return {
        ...state,
        tempQuery: action.query
      };
    }

    case actions.SEARCH: {
      return {
        ...state,
        query: state.tempQuery,
        loading: true,
        error: null
      }
    }

    case actions.LOAD_MORE: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }

    case actions.LOAD_SUCCESS: {
      const payload = action.payload;
      const currentItems = payload.clearItems ? [] : state.items;

      return {
        ...state,
        loading: false,
        totalItems: payload.totalItems,
        items: currentItems.concat(payload.items)
      }
    }

    case actions.LOAD_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      }
    }

    case actions.CHANGE_PAGE_SIZE: {
      return {
        ...state,
        pageSize: action.pageSize
      };
    }


    default:
      return state;
  }
};

export default reducer;
