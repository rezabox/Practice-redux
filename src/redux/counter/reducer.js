import { INCREMENT,DECREMENT,REST } from './counterActionType';

const initialState = {
       count :0
}

const Reducer = (state = initialState , action)=>{
       switch(action.type){
           case INCREMENT:
           return{
                ...state,
                count:state.count+1
           }
           case DECREMENT:
            return{
                 ...state,
                 count:state.count-1
            }
            case REST:
                return{
                     ...state,
                     count:0
                }
                default:
                   return state
                   
       }
}
export default Reducer;