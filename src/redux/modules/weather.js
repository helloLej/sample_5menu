import axios from 'axios'

const GET_DATA = 'Weather/GET_DATA'
const GET_DATA_SUCCESS = 'Weather/GET_DATA_SUCCESS'
const GET_DATA_FAILURE = 'Weather/GET_DATA_FAILURE'

const initialState = {
  result: [],
  loading: false,
  error: false,
}

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        loading: true,
      }

    case GET_DATA_SUCCESS:
      return {
        ...state,
        result: action.result,
        loading: false,
      }

    case GET_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    default:
      return state
  }
}

export const dataAsync = (city) => async (dispatch) => {
  dispatch({ type: GET_DATA })

  try {
    const result = await axios.get(
      'https://abnormal-weather-api.herokuapp.com/cities/search?',
      {
        params: {
          city,
        },
      },
    )

    dispatch({ type: GET_DATA_SUCCESS, result: result.data })
  } catch (e) {
    dispatch({
      type: GET_DATA_FAILURE,
      error: '데이터를 가져오는데 실패했습니다.',
    })
  }
}
