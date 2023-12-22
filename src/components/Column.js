function Column(props) {
    return (
        <column className="column">
            <h1 className="column-header">
                {props.columnTitle}
            </h1>
        </column>
    );
}

export default Column;