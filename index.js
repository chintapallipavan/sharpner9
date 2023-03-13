const posts=[
    
    {title:'post One' ,body:'this is post one' ,createdAt:new Date().getTime()},
    {title:'post Two' ,body:'this is post two',createdAt:new Date().getTime()}
];
function getPosts(){
    clearIntervalval(intervalId);
   intervalId= setInterval(() => {
            let output='';
            for(let i=0;i<posts.length;i++){
                posts.forEach((post,index)=>{
                    output+=`<li>${post[i].title}-last updated ${new Date().getTime()-posts[i].createdAt/1000} </li>`;
            
        }, 1000);
       
    }
    document.body.innerHTML = output;
    },1000);

}
function createPost(post,callback){
    setTimeout(()=>
    {
        posts.push(post);
        callback();
    },2000);
}
function create4thPost(post,callback){
    setTimeout(()=>
    {
        posts.push({...post,createdAt: new Date().getTime()});
        callback();
    },6000);
}
getPost()

createPost({title:'post One' ,body:'this is post three'},getPost);
create4thPost({title:'post Two' ,body:'this is post fourth'},getPost)

var timer;
var count=0;
function lastEditedInSecondsAgo() {
    count=0;
    clearInterval(timer)
    timer= setInterval ( () => {
    count++ ;
    console.log(count)
    
}, 5000};