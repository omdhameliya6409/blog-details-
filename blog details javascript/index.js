let blogblogdata2 = [];

const uimekar = () => {
    document.getElementById("blogdata2").innerHTML = ""
    for (let i = 0; i < blogblogdata2.length; i++) {
        let title = document.createElement("h2");
        title.innerHTML = blogblogdata2[i].title;
        let content = document.createElement("p");
        content.innerHTML = blogblogdata2[i].content;
        let img = document.createElement("img");
        img.src = blogblogdata2[i].img;
      let btn = document.createElement("button");
      btn.innerHTML="delete";
      let btn2 = document.createElement("button");
      btn2.innerHTML="like";
      btn2.addEventListener("click",() =>{
        alert("thank like")
        uimekar();
      });
      btn.addEventListener("click",() =>{
        blogblogdata2.splice(i, 1);
        uimekar();
      });
       let div = document.createElement("div");
       div.append(title,img,content,btn,btn2);
      document.getElementById("blogdata2").append(div);
    }
}

const blogdata2p = (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let img = document.getElementById("img").value;
    let content = document.getElementById("content").value;
  let username = document.getElementById("username").value;

  if(title.length < 2){
    alert("please enter a title")

    let p = document.createElement("p")

    p.innerHTML="please enater a valid title"

    console.log(p);
    document.getElementById("t-error").append(p)

    return
  }
  if(content < 0){
    alert("please enter a content")

    let h4 = document.createElement("h6")

    h4.innerHTML="please enater a valid content"
    h4.style.color="red"
    console.log(h4);
    document.getElementById("p-error").append(h4)
    return
  }
  if(username.length < 3){
    alert("must be 8 character")

 let h6 = document.createElement("h6")

 h6.innerHTML="please enater a valid username"
 console.log(h6);
 document.getElementById("usere").append(h6)
 return
  }
    let blog = {
        title: title,
        img: img,
        content: content,
        username:username
    };
    blogblogdata2.push(blog);

    uimekar();
}

document.getElementById("blogdetails").addEventListener("submit", blogdata2p);