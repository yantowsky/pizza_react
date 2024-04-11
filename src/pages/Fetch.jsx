import useFetch from '../hooks/useFetch.jsx';

const Fetch = () => {

    const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/albu');

    return (
        <div className="pizza">
            <h1 className='title'>
                Albums
            </h1>
            {error && <p>{error}</p>}
            {isLoading && <h2>Loading...</h2>}
            {!!data.length && data.map((item, id) => (
                <div className='album' key={id}>
                    {item.id}.{item.title};
                </div>
            ))}
        </div>
    );
}

export default Fetch;