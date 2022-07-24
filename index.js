// const display_info = res => {
//     console.log(res.data);
//     const parent_tag = document.getElementById("main");
//     for (let i = 0; i < res.data.length; i++) {

//         const single_element = res.data[i];
//         console.log(single_element);

//         const new_li = document.createElement("li");
//         new_li.innerText = (`${single_element.title} ${single_element.price}  ${single_element.description}`);
        
//         const new_img = document.createElement("img");
//         new_img.src = single_element.image;

//         new_li.appendChild(new_img);
//         parent_tag.appendChild(new_li);
//     }
// } 

const fetch_promise = fetch("http://fakestoreapi.com/products");
console.log(fetch_promise);
fetch_promise.then(response => {
    const json_file = response.json();
    json_file.then(data => {
        console.log(data);
        //display_info(data);


        const parent_tag = document.getElementById("main");
        for (let i = 0; i < data.length; i++) {
            const single_element = data[i];
            console.log(single_element);

            const new_img = document.createElement("img");
            new_img.src = single_element.image;

            const new_li = document.createElement("li");
            new_li.innerText = (`${single_element.title}`);
        
            const new_price = document.createElement("span");
            new_price.innerText = `${single_element.price}`;

            const new_button = document.createElement("button");
            new_button.innerText = "Add to cart ";;


            new_li.appendChild(new_button);
            new_li.appendChild(new_price);
            new_li.appendChild(new_img);
            parent_tag.appendChild(new_li);
    }
    })
})
