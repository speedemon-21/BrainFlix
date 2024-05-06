/*function Card(props) {
    return (
        <div 
            className="card" 
        >
            <div className="card__content">
                {props.content}
            </div>
            <h4 className="card__title">
                {props.title}
            </h4>
        </div>
    );
}
*/

function Card(props) {

    const clickHandler = () => {
        console.log("Title:", props.title);
        console.log("Content:", props.content);
    };

    return (
        <div 
            className="card" 
            onClick={clickHandler} // Add onClick event handler
        >
            <div className="card__content">
                {props.content}
            </div>
            <h4 className="card__title">
                {props.title}
            </h4>
        </div>
    );
}

export default Card;