const loadCetagories = ()=>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
        .then(data => displayCetagories(data.data.news_category))
}

const displayCetagories = (cetagories) =>{
    const cetagoriesContainer = document.getElementById('categories-container');
    cetagories.forEach(cetagory => {
        //console.log(cetagory);
         const cetagoriesDiv = document.createElement('div');
         cetagoriesDiv.classList.add('heading');
         cetagoriesDiv.innerHTML=`
             <a onclick = "loadCetagoryDetail(${cetagory.category_id})" class="nav-link" href="#" >${cetagory.category_name}</a>
        `;
          cetagoriesContainer.appendChild(cetagoriesDiv);
    });

}

const loadCetagoryDetail = (category_id) =>{
    //console.log(cetagory_id);
    const url = ` https://openapi.programming-hero.com/api/news/category/${category_id} `;
    console.log(url);
    

}

loadCetagories();