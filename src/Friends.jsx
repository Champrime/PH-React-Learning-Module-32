import {use} from "react";
import Friend from "./FriendJhankarBoss";

function Friends({Username}){
    console.log(Username);
    const FriendsGang = use (Username);
    return (
        <div className="card"> {/*props not needed if the className doesn't have to be imported or exported via components*/}
            <h3>Friends: {FriendsGang.length}</h3>
            {
                FriendsGang.map(friend => <Friend></Friend>)
            }
            {/* 
                1. Inside one { ... }, JSX expects one JavaScript expression.
                    If I put FriendsAPI.map(...) and then another JS expression, the parsing breaks. 
                2. I can't map an async promise. It'll break at the runtime.
                    For example, If I Username.map(), it's not an actual object, so    it'll break, but at the runtime.     
            */}
        </div>
    )
}

export default Friends