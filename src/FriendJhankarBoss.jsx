import "./App.css"

export default function Friend({fontBGName, fontClassName}){
    return(
        <div className={`card ${fontBGName}`}>
            <h4 className={fontClassName}>Name: </h4>
        </div>
    )
}
/*className prop here catches the classes sent to it via 2 prop-hands*/