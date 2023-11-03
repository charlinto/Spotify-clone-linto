 export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // reeeeeeeeemove after developing
    // token:"QCc8_d1V1M88wS5n0fZLyMbzAZlPgKSrA7iV98AposfbRwQ9-…flz3K0sjue-2qGJyH3nyE28whRJmmGgVaYlKvvEXEfNLjlwyf"
 };

 const reducer = (state, action) => {
    console.log(action)

    switch(action.type) {
        case 'SET_USER':
        return {
            ...state,
            user: action.user,
        };
        case "SET_TOKEN" :
            return{
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS" :
            return {
                ...state,
                playlists: action.playlists, 
            };
            case "SET_DISCOVER_WEEKLY" :
                return {
                    ...state,
                    discover_weekly: action.discover_weekly,
                }
        default:
            return state;
    }

 } 
export default reducer;