import { use } from "react";

export default function Users({Username}){
    const fetchUser = use (Username);
    console.log(fetchUser);
    return(
        <div>
            <h3>Users: {fetchUser.length}</h3>
        </div>
    )
}
    // export default function Users({ usersAPI }) {
    // return (
    //     <div>
    //         <h3>Users API: {usersAPI}</h3>
    //     </div>
    // );
