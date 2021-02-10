//Selectors
const addBlogBtn = document.querySelector('#addbtn');
const title = document.querySelector('#title');
const imgUrl = document.querySelector('#imgUrl');
const desc = document.querySelector('#desc');
const blogListContainer = document.querySelector('#blogListContainer');
const deleteBTn = document.querySelectorAll('.deleteBtn');

//Event Listeners
addBlogBtn.addEventListener('click', addBlog);
blogListContainer.addEventListener('click', deleteBlog);
document.addEventListener("DOMContentLoaded", getBlogs);

//Functions
function addBlog(){
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('blogs');

    const img = document.createElement('img');
    img.src = imgUrl.value;
    mainDiv.appendChild(img);

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('titleContainer');
    titleDiv.innerText = title.value;
    mainDiv.appendChild(titleDiv);

    const descDiv = document.createElement('div');
    descDiv.classList.add('hiddenDesc');
    descDiv.innerText = desc.value;
    mainDiv.appendChild(descDiv);

    const button = document.createElement('button');
    button.classList.add('deleteBtn');
    button.innerText = "delete";
    mainDiv.appendChild(button);

    let blogobj = {
        title: title.value,
        imgUrl: imgUrl.value,
        desc: desc.value
    }

    SaveLocalBlogs(blogobj);
    
    blogListContainer.appendChild(mainDiv);
}

function deleteBlog(e){
    if(e.target.classList[0] === 'deleteBtn'){
        console.log(e.target.parentElement);
        // e.target.parentElement.remove();

        let blogs
        if (localStorage.getItem('blogs') === null) {
            blogs = [];
        }else{
            blogs = JSON.parse(localStorage.getItem('blogs'));
        }

        let deleteimg = e.target.parentElement.children[0].src;
        let deletetitle = e.target.parentElement.children[1].innerText;
        let deletedesc = e.target.parentElement.children[2].innerText;
        let itemfordelete;

        blogs.forEach(item => {
            if (item.title == deletetitle && item.desc == deletedesc) {
                itemfordelete = item;
            }
        })
        
        blogs.splice(blogs.indexOf(itemfordelete), 1);
        localStorage.setItem("blogs", JSON.stringify(blogs));
        location.reload();
    }
}

function SaveLocalBlogs(blog){
    let blogs
    if (localStorage.getItem('blogs') === null) {
        blogs = [];
    }else{
        blogs = JSON.parse(localStorage.getItem('blogs'));
    }
    blogs.push(blog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
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

        const button = document.createElement('button');
        button.classList.add('deleteBtn');
        button.innerText = "delete";
        mainDiv.appendChild(button);

        blogListContainer.appendChild(mainDiv);
    })
}