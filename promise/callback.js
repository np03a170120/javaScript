const posts = [
  { title: "Vanilla Js", description: "We love Js" },
  { title: "ReactJS", description: "We love ReactJS" },
];

function displayPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li> ${post.title} </li>`;
    });
    document.body.innerHTML = output;
  }, 3000);
}

function creatPost(post, callback) {
  setTimeout(() => {
    callback();
    posts.push(post);
  }, 3000);
}

creatPost({ title: "NodeJS", description: "We love NodeJS" }, displayPost);
