// import postData from './mockData/index.json' assert {type: "JSON"};
const postData = [{
  "date": "2nd Januray, 2018",
  "readingTime": "2 mins",
  "title": "The future of abstract art and the culture ...",
  "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
  "claps": 10,
  "liked": false,
  "image": "abstract.png"
}, {
  "date": "31st Januray, 2018",
  "readingTime": "1 min",
  "title": "How painting outdoors can transform your ",
  "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
  "claps": 1,
  "liked": true,
  "image": "outdoor.png"
}, {
  "date": "20th March, 2018",
  "readingTime": "2 mins",
  "title": "10 young painters you need to know",
  "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
  "claps": 15,
  "liked": false,
  "image": "young-painters.png"
}, {
  "date": "22nd June, 2018",
  "readingTime": "5 mins",
  "title": "Tips for creating the perfect art",
  "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
  "claps": 11,
  "liked": false,
  "image": "perfect-art.png"
}, {
  "date": "4th Feburary, 2019",
  "readingTime": "9 mins",
  "title": "Stay inspired: top artists blog ...",
  "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
  "claps": 45,
  "liked": true,
  "image": "inspired.png"
}, {
  "date": "10th Januray, 2019",
  "readingTime": "2 mins",
  "title": "5 reasons why everyone should try an...",
  "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
  "claps": 11,
  "liked": false,
  "image": "reason.png"
}, {
  "date": "10th Januray, 2019",
  "readingTime": "2 mins",
  "title": "5 reasons why everyone should try an...",
  "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
  "claps": 11,
  "liked": false,
  "image": "reason.png"
}, {
  "date": "10th Januray, 2019",
  "readingTime": "2 mins",
  "title": "5 reasons why everyone should try an...",
  "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
  "claps": 11,
  "liked": false,
  "image": "reason.png"
}]
const mainContent = document.querySelector('.main-content');


const allPostsHtml = postData.reduce((final, curr) => {
  const postHtml = `
  <div class="post-container">
  <img src="./Images/${curr.image}" class="post-image" />
  <div class="post-content">
    <div class="post-date-time">
      <p>${curr.date}</p>
      <p>${curr.readingTime}</p>
    </div>
    <div class="post-text">
      <p class="post-title">${curr.title}</p>
      <p class="post-description">${curr.description}
      </p>
    </div>
    <div class="post-interactions">
      <div class="clap-container clapping-btn">
        <img src="./Icons/clapping.svg" class="post-interaction-img" />
        <p>${curr.claps}</p>
      </div>
      <img src="${curr.liked ? "./Icons/heart-red.svg" : "./Icons/heart-black.svg"}" class="post-interaction-img heart-btn" data-liked=${curr.liked} />
    </div>
  </div>
  </div>
  `
  return final + postHtml;
}, "");

mainContent.innerHTML = allPostsHtml;

document.querySelectorAll('.clapping-btn').forEach((ele) => {
  ele.addEventListener('click', (event) => {
    ele.lastElementChild.innerHTML = Number(ele.lastElementChild.innerHTML) + 1;
  })
})

document.querySelectorAll('.heart-btn').forEach((heart) => {
  heart.addEventListener('click', (event) => {
    const likeStatus = heart.getAttribute('data-liked');
    event.target.src = likeStatus === "false" ? './Icons/heart-red.svg' : './Icons/heart-black.svg';
    heart.setAttribute('data-liked', likeStatus === "false" ? "true" : "false");
    // console.log(typeof heart.getAttribute('data-liked'));
  })
})