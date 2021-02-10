//Selectors
const blog = document.querySelectorAll('.blogs');
const currentBlog = document.querySelector('#currentBlog');
const blogListContainer = document.querySelector('#blogListContainer');

//Event Listeners
// blog.forEach(blog => {
//     blog.addEventListener('click', selectBlog);
// });
blogListContainer.addEventListener("click", selectBlog);
document.addEventListener("DOMContentLoaded", getBlogs);

//Functions
function selectBlog(e){
    console.log("sadas");
    currentBlog.children[0].innerHTML = e.target.children[1].innerHTML;
    currentBlog.children[1].children[0].src = e.target.children[0].src;
    currentBlog.children[2].innerHTML = e.target.children[2].innerHTML;
}

function getBlogs(){
    let blogs
    if (localStorage.getItem('blogs') === null) {
        blogs = [];
    }else{
        blogs = JSON.parse(localStorage.getItem('blogs'));
    }

    blogs.forEach(item => {
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('blogs');
    
        const img = document.createElement('img');
        img.src = item.imgUrl;
        mainDiv.appendChild(img);
    
        const titleDiv = document.createElement('div');
        titleDiv.classList.add('titleContainer');
        titleDiv.innerText = item.title;
        mainDiv.appendChild(titleDiv);
    
        const descDiv = document.createElement('div');
        descDiv.classList.add('hiddenDesc');
        descDiv.innerText = item.desc;
        mainDiv.appendChild(descDiv);

        blogListContainer.appendChild(mainDiv);
    })
}