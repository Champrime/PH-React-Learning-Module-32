import "./App.css"

export default function Friend({friendLooped, fontBGName, fontClassName}){
    // console.log(friendLooped);
    const {name, email, phone} = friendLooped;
    // console.log(friend);
    return(
        <div className={`card2 ${fontBGName}`}>
            <h4 className={fontClassName}>Name: {name}</h4>
            <p>E-Mail: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}
/*className prop here catches the classes sent to it via 2 prop-hands*/