import React from "react";
//créer un composant
const DataProps = (props) => {
    const { name} = props;
    return (
        <h1>Welcome {name}</h1>
    )
}

export default DataProps;