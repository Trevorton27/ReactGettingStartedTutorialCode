const Card = (props) => {
    return (
        <div styel={{margin: '1em'}}>
            <img width="75" src={props.avatar_url} />
            <div style={{display: 'inLine-block', marginLeft: 10}}>
                <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
                {props.name}
                </div>
                <div>
                {props.company}
                </div>
            </div>
        </div>
    );
};

const CardList = (props) => {
    return (
        <div>
            <Card  
            name="Seymour Jenkins"
            avatar_url="https://avatars0.githubusercontent.com/u/1?v=4"
            company="The Company, Playa"
            
            />
        </div>
    );
}


ReactDOM.render(<CardList />, mountNode);