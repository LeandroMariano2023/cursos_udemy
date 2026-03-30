const TemplateExprecission = () => {
    const name = 'Leandro'
    const data = {
        age: 35,
        job: 'Programador'
    }
    return (
        <div>
            <h1>Olá {name} tudo bem?</h1>
            <p>Você é {data.job} e tem {data.age} anos.</p>
        </div>
    )
}

export default TemplateExprecission;