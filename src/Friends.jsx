import {use} from "react";

function Friends({Username}){
    console.log(Username);
    const FriendsGang = use (Username);
    return (
        <div className="card">
            <h3>Friends: {FriendsGang.length}</h3>
        </div>
    )
}

export default Friends