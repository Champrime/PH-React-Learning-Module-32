import { useEffect, useState } from "react";

export default function Players(){
    const [player, setPlayer] = useState([]);

    useEffect(() => {
        const fetchPlayers = async() => {
            const pullP = await fetch("https://jsonplaceholder.typicode.com/users");
            const pull = await pullP.json();
            setPlayer(pull);
        }

        fetchPlayers();
    }, []);

    const [article, setArticle]=useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setArticle(data))
    }, []);

    return (
        <>
            <h4>Players: {player.length}</h4>
            {
                player.map(p => <li key={p.id}>{p.name}</li>)
            }
            
            {
                article.map(p =>
                    <div key={p.id}>
                        <h5>{p.title}</h5>
                        <p>{p.body}</p>
                    </div>
                )
            }
        </>
    )
}