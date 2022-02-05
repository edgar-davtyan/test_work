const FetchData = async (id) => {
    const data = [];
    const category = [];

    await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id}`)
        .then((res) => res.json())
        .then((json) => {
            if (json.length > 0) {
                data.push(...json)
            }
        })

    await fetch(
        "https://api.thecatapi.com/v1/categories ")
        .then((res) => res.json())
        .then((json) => {
            if (json.length > 0) {
                category.push(...json)
            }
        })
    console.log(data);
    return { data, category }
}

export default FetchData