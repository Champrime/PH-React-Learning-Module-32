import { useEffect, useState } from "react";

export default function Players(){
    const [player, setPlayer] = useState([]);

    useEffect(() => {
        async() => {
            const pullP = await fetch("https://jsonplaceholder.typicode.com/users");
            const pull = await pullP.json();
            return setPlayer(pull);
        }
    })

    return (
        <>
            <h4>Players: {players.length}</h4>
            {
                players.map(p => <li>{p.name}</li>)
            }
        </>
    )
}