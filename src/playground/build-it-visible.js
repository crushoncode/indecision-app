let visibility = false;

const toggleVisiblity = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1> 
            <button onClick={toggleVisiblity}> 
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'))
};

render();

