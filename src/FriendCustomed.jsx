import {use} from "react";
import {Suspense} from "react";
import Friend from "./FriendJhankarBoss";
import "./App.css";

export default function FriendCustomed({person, friendClassName}){
    let FriendOneByOne = use(person);
    // console.log("FriendOneByOne");
    // FriendOneByOne.forEach(x => console.log(x));
    // const friendName = person;
    return (
        <Suspense fallback={<p>Friends and Addresses Loading...</p>}>
            {
                FriendOneByOne.map(friend =>
                <div key={friend.id} className={friendClassName}>
                    <h5>{<Friend friendLooped={friend} fontBGName="cardb" fontClassName="FriendJhankarBoss"></Friend>} from "{friend.address.street}" street</h5>
                    {/* The friendClassName is a prop.
                        It has taken a class against this prop name from where `FriendCustomed` is imported. Then passed a css style from stylesheet to the component as another prop.
                        I must catch the prop there in the components base-file too. Else, the className and the css style won't show up.
                    */}
                </div>
                )
            }
        </Suspense>
    )
}