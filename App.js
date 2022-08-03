const App = () => { // JSX

    const [names, setNames] = useState([ 'John Doe', 'Jane Doe'])
    const divContentRef = useRef();

    const result = () => {
        let r = [];
        for (let i = -8; i < 10; i += 2) {
            r.push(<li>{i}</li>)
        }
        return r;
    }

    


    return (
        <>
            <div id="contenido" ref={divContentRef}>
                <ul className="lista">
                    <li>PHP</li>
                    <li>JAVA</li>
                    <li>PYTHON</li>
                    <li>C++</li>
                </ul>
                <ul className="lista">
                    <li>ENGLISH</li>
                    <li>SPANISH</li>
                    <li>DUTCH</li>
                    {
                        names.map((name) => <li>{name}</li> )
                    }
                </ul>
            </div>
            <ul className="resultado">
                {result()}
            </ul>
        </>
    )
}

<App />