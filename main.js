//Selectors
const blog = document.querySelectorAll('.blogs');
const currentBlog = document.querySelector('#currentBlog');

//Event Listeners
blog.forEach(blog => {
    blog.addEventListener('click', selectBlog);
});

//Functions
function selectBlog(e){
    console.log(currentBlog.children[1].children[0].src);
    currentBlog.children[0].innerHTML = e.target.children[1].innerHTML;
    currentBlog.children[1].children[0].src = e.target.children[0].src;
    currentBlog.children[2].innerHTML = e.target.children[2].innerHTML;
}