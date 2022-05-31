const Total = ({exercises}) => {
    let sum = 0
    exercises.forEach(element => {
        sum+=element
    });

    return (<p>Number of exercises {sum}</p>)
}

export default Total