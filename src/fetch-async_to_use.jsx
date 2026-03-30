// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json)
//     .then(data => console.log(data));

// const asyncUsers = async() => {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     return data;
// }

import { Suspense } from "react";
import Users from "./Users"
import Friends from "./Friends"

// const asyncUsers = async() => {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     return data;
// }

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())

const asyncFriends = async() => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
}
/*

1. Just write a simple fetch with json conversion
2. Wrap the data loading component under suspense

*/



function FetchMessage(){
    const usersAPI = fetchUsers;
    const FriendsAPI = asyncFriends();
    return (
        <>
            <Suspense fallback={<h6>Loading...</h6>}>
                <Users Username = {usersAPI}></Users>
            </Suspense>
            <Suspense fallback={<h6>Friends are coming for FIFA 19...</h6>}>
                <Friends Username = {FriendsAPI}></Friends>
            </Suspense>
        </>
    )
}


export default FetchMessage

/*
function Fetch_async({ tag }) {
    const usersAPI = "https://jsonplaceholder.typicode.com/users";

    return <FetchMessage tag={tag} usersAPI={usersAPI} />;
}

function FetchMessage({ tag, usersAPI }) {
    return (
        <div>
            <h4>{tag}</h4>
            <Suspense fallback={<h6>Loading...</h6>}>
                <Users usersAPI={usersAPI} />
            </Suspense>
        </div>
    );
}

export default Fetch_async
*/