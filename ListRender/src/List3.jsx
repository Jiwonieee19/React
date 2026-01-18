import PropTypes from "prop-types";

function List3(props) {
    // REUSABLE LIST
    const category = props.category;
    const itemsPassed = props.items;

    const listItems = itemsPassed.map((item) => <li key={item.id}> {item.name}: &nbsp;{item.calories}</li>)

    return (<>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
    </>)

    //defaultProps and PropTypes issue are already talked on day 3, we are using react19, defaultProps to destructuring function, and propTypes to skill issue
}

List3.defaultProps = {
    category: "Category",
    items: [],
}

List3.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    })),
}

export default List3