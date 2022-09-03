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
        //console.log(category);
         const categoryDiv = document.createElement('div');
      categoryDiv.classList.add('div');
      categoryDiv.innerHTML = `
          <div class="row g-0 ">
         <div class="col-md-4">
              <img src="${details.image_url}" class="img-fluid rounded-start" alt="...">
         </div>
         <div class="col-md-8 ps-5">
              <div class="card-body">
              <h5 class="card-title fw-bold">${details.title}</h5>      
                         <p class="card-text pt-3">${details.details.slice(0,300)}....</p>
                
                 <div class="d-flex justify-content-between ">
                   <div class="d-flex ">
                    <div>
                    <img class="image rounded-circle" src="${details.author.img}" " rounded-start" alt="...">
                    </div>
                    <div class="ms-3 text-center">
                    <h5>${details.author.name}</h5>
                    <p>${details.author.published_date}</p>
                    </div>
                   </div>
                    <div class="d-flex ">
                    <div >
                    <i class="fa-regular fa-eye"></i>
                    </div>
                    <div>
                    <h4 class="ms-3 text-center">${details.total_view}K</h4>
                    </div>
                    </div>
                    <div>
                    <i class="fa-sharp fa-solid fa-arrow-right" onclick="loadNewsDetails()" ></i>
                    </div>

                 </div>
            </div>
         </div>

    </div>
    `
     detailContainer.appendChild(categoryDiv)
     })
  };

  const loadNewsDetails = () =>{

  }


 

loadCategories('');