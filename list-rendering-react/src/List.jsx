function List() {
    
    const fruit = [{
        id: 1, name: "Apple",
        calories: 95},
        {id: 2,name:  "Orange", calories: 15},
        {id: 3 ,name:  "Banana", calories: 25},
        {id: 4,name:  "Coconut", calories: 55},
        {id: 5,name:  "Pineapple", calories: 75}
    ];


    // Alphabetical Order
    fruit.sort((a, b) => a.name.localeCompare(b.name));

    // Reverse Alphabetical Order
    // fruit.sort((a, b) => b.name.localeCompare(a.name));

    // Numerical Sorting
    // fruit.sort((a, b) => a.calories - b.calories)
    
    // // Reverse Numerical Sorting
    // fruit.sort((a, b)=> b.calories - a.calories)

    const listItems = fruit.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{ fruit.calories}</b></li>  );

    return (<ol>{listItems}</ol>);

}

export default List