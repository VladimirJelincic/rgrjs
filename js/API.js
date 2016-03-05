/**
 * Created by vladimir on 04/03/16.
 */
import {get} from "jquery";
import ServerActions from "./actions/ServerActions";
let API = {
    fetchLinks(){
        console.log("1. In API");
        get("/data/links").done(resp=>{
            ServerActions.receivelinks(resp);
        })
    }
};
export default API;