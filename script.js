async function showData() {
  const jsonPostsFile = await fetch("data.json");
  const posts = await jsonPostsFile.json();
  const main = document.getElementById("main");
  const articles = [];

  for (let post of posts) {
    const articleTitle = document.createElement("h3");
    const articleBody = document.createElement("p");
    const article = document.createElement("article");
    articleTitle.innerText = post.title;
    articleBody.innerText = post.body;
    article.append(articleTitle);
    article.append(articleBody);
    articles.push(article);
  }
  main.append(...articles);
}

document.addEventListener("DOMContentLoaded", () => {
  showData();
});
