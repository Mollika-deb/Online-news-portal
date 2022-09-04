const loadCategories = ()=>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCategories(data.data.news_category))
    .catch(error => console.log(error))
}

const displayCategories = (categories) =>{
  toggoleSpinner(true);
    const categoriesContainer = document.getElementById('categories-container');
    categories.forEach(category => {
        console.log(category);
         const categoriesDiv = document.createElement('div');
         categoriesDiv.classList.add('heading');
         categoriesDiv.innerHTML=`

             <a onclick = "loadCategoryDetail(${category.category_id})" class="nav-link" href="#" >${category.category_name}</a>
        `
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
      const categoryLength = category.length;
      const noData = document.getElementById('no-data');{
        if(categoryLength === 0){
            noData.classList.remove('d-none');
        }
      }
    //  const count = document.getElementById('count-details');

    //  const countDiv = document.createElement('p');
    //  countDiv.classList.add('countAns');
    //  countDiv.innerHTML = `
    //     <p>${category.length} news is found</p>
    //    `
    //  count.appendChild(countDiv);

    //   if(categoryLength===0){
    //     const length = "There is no data";
    //  }
    //   else{
    //     const length = categoryLength;
    //   }
      detailContainer.innerHTML = '';
     category.forEach(details => {
        //console.log(category);
         const categoryDiv = document.createElement('div');
      categoryDiv.classList.add('div');
      categoryDiv.innerHTML = `
            <p>${category.length} news is found</p>
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
                    <i onclick="loadNewsDetails(${details._id})" class="fa-sharp fa-solid fa-arrow-right"  data-bs-toggle="modal" data-bs-target="#newsModal"></i>

                    </div>

                 </div>
            </div>
         </div>

    </div>
    `
     detailContainer.appendChild(categoryDiv)
     })
     toggoleSpinner(false);
  };

  const loadNewsDetails = (_id) =>{
      const url = `https://openapi.programming-hero.com/api/news/${details._id}`
       .then(res => res.json())
       .then(data => console.log(data))
    console.log(_id);

  }

  const blog = () =>{
      const clickBlog = document.getElementById('click-blog');
      clickBlog.innerHTML = '';
      const blogDiv = document.createElement('div');
      blogDiv.classList.add('blogAns');
      blogDiv.innerHTML=`
      <h3>Whats are the difference between var , let & const ?</h3>
      <p>The scope of a let variable is block scope. The scope of a const variable is block scope. var declarations are globally scoped or function scoped</p>
      </br>
      <h3>Whats are the difference between arrow function & regular function ?</h3>
      <p>The first and most obvious difference between arrow functions and regular functions is their syntax. Not only do they look different, but arrow functions also provide an implicit return shorthand and allow parenthesis around a single argument to be omitted.</p>
      </br>
      <h3>Whats are the difference between Map , Filter , Find & forEach method ?</h3>
      <p>.forEach(), is used to execute the same code on every element in an array but does not change the array and it returns undefined..map() executes the same code on every element in an array and returns a new array with the updated elements..filter() checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria.</p>
      `
      clickBlog.appendChild(blogDiv);
  }

   const toggoleSpinner = (isLoading) => {
    const loadSection = document.getElementById('loader');
    if(isLoading){
     loadSection.classList.remove('d-none');
     }
     else{
      loadSection.classList.add('d-none');
     }
   }



     
  



 

loadCategories('8');