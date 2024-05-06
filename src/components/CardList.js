import Card from './Card';

function CardList(props) {
    let cardContent = [
        {
            title: 'First Card',
            content: 'First card content'
        },
        {
            title: 'Second Card',
            content: 'Second card content'
        }
    ];
    
    return (
        <section className="card-list">
            {props.cardContent.map((content, index) => <Card 
                key={index} 
                title={content.title} 
                content={content.content} />)}
        </section>
    );
}

export default CardList;