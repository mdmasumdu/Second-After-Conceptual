const Country = ({country}) => {
    console.log(country)
    const {name,flags} =country
    return (
        <div className="m-5 border border-sky-500 p-10">
            <h3 className="mb-5">Name:{name.official}</h3>
            <img src={flags.png}></img>
            
        </div>
    );
};

export default Country;