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

function creatPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    });
  });
}

async function apiCall() {
  const res = await fetch("url");
  const data = await res.json();
  console.log(data);
}

// creatPost({ title: "NodeJS", description: "We love NodeJS" })
//   .then(displayPost)
//   .catch((err) => console.log(err));

async function init() {
  await creatPost({ title: "NodeJS", description: "We love NodeJS" });
  displayPost();
}
