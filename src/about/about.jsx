import React from 'react';
import './about.css';

export function About(props) {
    const [imageUrl, setImageUrl] = React.useState('');
    const [quote, setQuote] = React.useState('Loading...');
    const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');
    
    React.useEffect(() => {
        const random = Math.floor(Math.random() * 1000);
        fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
            .then((response) => response.json())
            .then((data) => {
            const containerEl = document.querySelector('#picture');

            const width = containerEl.offsetWidth;
            const height = containerEl.offsetHeight;
            const apiUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
            setImageUrl(apiUrl);
        })
        .catch();

        fetch('https://api.quotable.io/random')
            .then((response) => response.json())
            .then((data) => {
            setQuote(data.content);
            setQuoteAuthor(data.author);
            })
            .catch();
        }, []);

    let imgEl = '';

    if (imageUrl) {
        imgEl = <img src={imageUrl} alt='stock background' />;
    }
    
    return (
        <main className="container-fluid text-center">
            <div>
                <div id="picture" className="picture-box"> 
                    {imgEl}
                </div>
    
                <p>
                    This is a place for you to share the books you've been reading with friends and other members of the community. 
                    Share what you liked or didn't like and give a rating out of 5 stars. Comment on others recommendations if 
                    you have more to say about a different book already recommended.
                </p>
        
                <div className='quote-box bg-light text-dark'>
                    <p className="quote"> {quote}</p>
                    <p className="author"> {quoteAuthor}</p>
                </div>
            </div>
        </main>
    );
}