import React from "react";
import Cats from "./component/cats";

const Layouts = ({ context, setId }) => {
    return (
        <context.Consumer>
            {data => <Cats setId={setId} data={data} />}
        </context.Consumer>
    )
}

export default Layouts;