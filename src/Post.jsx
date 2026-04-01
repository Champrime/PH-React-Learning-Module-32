export default function Post ({postMaker}){ //If I used `postMaker`, it would bundle all the `props` of this component, becoming the parent `props`. So I carefully check if I have used {} to de-structure the prop like `{postMaker}`.
    const {title, body} = postMaker;
    const style = {
        color: "yellow"
    }
    // console.log(title);
    // console.log(body);
    return(
        <>
            <h4 className={style}>{title}</h4>
            <p>{body}</p>
        </>
    )
}