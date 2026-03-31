import "./App.css"

export default function Friend({friendLooped, fontBGName, fontClassName}){
    console.log(friendLooped);
    const friend = friendLooped;
    // console.log(friend);
    return(
        <div className={`card ${fontBGName}`}>
            <h4 className={fontClassName}>Name: {}</h4>
        </div>
    )
}
/*className prop here catches the classes sent to it via 2 prop-hands*/