/**
 * Created by vladimir on 04/03/16.
 */
import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let ServerActions={
    receivelinks(links){
        console.log("2. in ServerActions");
        AppDispatcher.dispatch({
            actionType: ActionTypes.RECEIVE_LINKS,
            links
        })
    }
}
export default ServerActions;