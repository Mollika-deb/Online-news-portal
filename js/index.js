const loadCategories = ()=>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
        .then(data => displayCategories(data.data.news_category))
}

const displayCategories = (categories) =>{
    const categoriesContainer = document.getElementById('categories-container');
    categories.forEach(category => {
        console.log(category);
         const categoriesDiv = document.createElement('div');
         categoriesDiv.classList.add('heading');
         categoriesDiv.innerHTML=`

             <a onclick = "loadCategoryDetail(${category.category_id})" class="nav-link" href="#" >${category.category_name}</a>
        `;
          categoriesContainer.appendChild(categoriesDiv);
    });

}

 const loadCategoryDetail = (category_id) =>{
  
     const url = ` https://openapi.programming-hero.com/api/news/category/0${category_id} `;
     //console.log(url);

     fetch (url)
     .then(res => res.json())
     .then(data => displayCategoriesDetails(data.data));  

 };


  const displayCategoriesDetails = (category) =>{
      const detailContainer = document.getElementById('detail-container');
      detailContainer.innerHTML = '';
     category.forEach(details => {
         const categoryDiv = document.createElement('div');
      categoryDiv.classList.add('div');
      categoryDiv.innerHTML = `
          <div class="row g-0 ">
         <div class="col-md-4">
              <img src="${details.image_url}" class="img-fluid rounded-start" alt="...">
         </div>
         <div class="col-md-8">
              <div class="card-body">
              <h5 class="card-title">${details.title}</h5>      
                         <p class="card-text">${details.details}</p>
                 <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                 <div>
                    <div>
                    <img src="${details.author.img}" " rounded-start" alt="...">
                    </div>
                    <div>
                    <h4>${details.author.name}</h4>
                    <p>${details.author.published_date}</p>
                    </div>
                    <div>
                    <i class="fa-regular fa-eye"></i>
                    <h3>${details.total_view}</h3>
                    </div>
                    <div>
                    <i class="fa-sharp fa-solid fa-arrow-right"></i>
                    </div>

                 </div>
            </div>
         </div>

    </div>
    `
     detailContainer.appendChild(categoryDiv)
     })
  };
 

loadCategories('');