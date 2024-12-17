function Person({person}) {
    return (
        <div>
            <h1>{person.name}</h1>
            <div><img src={person.imageUrl} alt=""/></div>
            <p>{person.presentation}</p>
            <p>{person.languages}</p>

        </div>
    )
}

export default Person;