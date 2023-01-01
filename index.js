let content =  document.getElementById("content");
let addLike = document.getElementById("heart-icon");
let allLike = document.getElementById("all_like");
let click = document .getElementById("btn");

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }]
    
    
        for(let i= 0; i<posts.length ; i++){
           
            let newItem = document.createElement("div");
            newItem.classList.add ="content";
            posts.forEach(function(){
            newItem.innerHTML = `  
            <div id="bio">
                <div >
                    <img src=${posts[i].avatar} id="vangog">
                </div>
                <div id="identification">
                    <h1 style="font-size: 13px;">${posts[i].name}</h1>
                    <p style="font-size: 12px; font-weight: 400;">${posts[i].location}</p>
                </div>
            </div>
            <img src=${posts[i].post} id="post-vangog">
            <div id="icons">
            
                <button><i class="fas fa-heart fa-2x " id="heart-icon" ></i></button>
                <button><i class="fas fa-comment fa-2x" id="comment-icon"></i></button>
                <button><i class="fas fa-share fa-2x" id="dm-icon"></i></button>
            </div>
            <div id="like">
                <span id="all_like" >Like: ${posts[i].likes} </span>
                <span >${posts[i].comment} </span>
             </div> 
             
                 `
             
            })
             content.appendChild(newItem);
               
        }

           
         

   
   





















