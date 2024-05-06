function CardForm({ addCard }) {
    const [title, setTitle] =('');
    const [content, setContent] = ('');

    // Function to handle form submission
    const submitHandler = (event) => {
        event.preventDefault(); 
        addCard(title, content);
        // Optionally, you can reset the form fields after submission
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={submitHandler}> {/* Add onSubmit event handler */}
            <div>
                <label htmlFor="title">Title:</label>
                <input 
                    type="text" 
                    id="title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="content">Content:</label>
                <textarea 
                    id="content" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default CardForm;
