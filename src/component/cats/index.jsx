import React, { useEffect, useState } from "react";
import './style.scss'


const Cats = ({ data, setId }) => {
    const [catsData, setCatsData] = useState([]);
    const [category, setCategory] = useState([]);

    data?.then((response) => {
        setCatsData(response?.data)
        setCategory(response?.category)
    });

    const getCategory = (id) => {
        setId(id)
    }

    return (
        <div>
            <div className="buttons-container">
                {category && category.map((item, index) =>
                    (<button key={index} onClick={() => getCategory(item.id)}>{item.name}</button>)
                )}
            </div>
            <div className="conainer-cats">
                {catsData && catsData.map((item, index) => (
                    <div key={index} className="conainer-box">
                        <div className="image-box">
                            <img src={item.url} alt="" />
                        </div>
                        <p className="cats-name">
                            Name: <span>{item.categories[0].name}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Cats;