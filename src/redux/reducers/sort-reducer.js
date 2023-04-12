const SET_SORT_BY = 'SET_SORT_BY'
const SET_CATEGORY = 'SET_CATEGORY'

let initialState = {
    category : ["популярности", "цене", "алфавиту"],
    sortBy: '0'
}

const sortReduser = (state = initialState, action)=>{

    switch (action.type) {
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.category
            };
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.sortBy
            };

        default:
            break;
    }
    return state;
}


export const setCategory =(category)=>{
    return{
    type:SET_CATEGORY,
    category
}
}

export const setSortBy =(sortBy)=>{
    return{
    type:SET_SORT_BY,
    sortBy
}
}


export default sortReduser;