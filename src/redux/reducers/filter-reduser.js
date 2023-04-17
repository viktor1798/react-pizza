const SET_SORT_BY = 'SET_SORT_BY'
const SET_CATEGORY = 'SET_CATEGORY'

let initialState = {
    category:0,
    sortBy:'popular'
}

const sortReduser = (state = initialState, action)=>{

    switch (action.type) {
        case 'SET_CATEGORY':
            return{
                ...state,
                category: action.catCategory
            }
        case 'SET_SORT_BY':
            return{
                ...state,
                sortBy: action.sortBy
            }


        default:
            break;
    }
    return state;
}


export const setCategory =(catCategory)=>{
    return{
    type:SET_CATEGORY,
    catCategory
}
}
export const setSortBy =(name)=>{
    return{
    type:SET_SORT_BY,
    name
}
}


export default sortReduser;