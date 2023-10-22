// Define CommentsHeader component
Vue.component("comments-header", {
  template: `<h2>Comments</h2>`,
});

Vue.component("photo-aside", {
  template: `
<aside id="photos">
  <img src="images/chili.jpg" alt="White Chicken Chili" width="180" class="img-fluid" />
</aside>
`,
});

Vue.component("navigation-system", {
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Food Blog</a>
  <button 
    class="navbar-toggler" 
    type="button" 
    data-toggle="collapse" 
    data-target="#navbarNav" 
    aria-controls="navbarNav" 
    aria-expanded="false" 
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Recipes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Lifestyles</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Videos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
    </ul>
  </div>
</nav>
`,
});

// Define blog-post component
Vue.component("blog-post", {
  props: ["post"],
  template: `
      <div class="post">
          <img :src="profilePicture" alt="Profile" class="profile-img clickable-img" width="50" @click="$emit('author-clicked', post.author)" />
          <span class="author">{{ post.author }}</span> — 
          <span class="date">{{ post.date }}</span>
          <span class="reply">REPLY</span>
          <p>{{ post.content }}</p>
      </div>`,
  data: function () {
    return {
      profilePicture: "images/profile.png",
    };
  },
});

new Vue({
  el: "#container",
  data: {
    posts: [
      {
        author: "Brianna",
        date: "February 18, 2021 @ 3:30 pm",
        content:
          "Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!",
      },
      {
        author: "LINH",
        date: "February 18, 2021 @ 3:30 pm",
        content:
          "Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!",
      },
    ],
    showInfoBox: false,
    activeAuthorInfo: {
      name: "",
      foodieLevel: "",
      bio: "",
    },
    authors: {
      Brianna: {
        name: "Brianna",
        foodieLevel: "Foodie Level: Novice",
        bio: "Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!",
      },
      LINH: {
        name: "LINH",
        foodieLevel: "Foodie Level: Newcomer",
        bio: "Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.",
      },
    },
  },
  methods: {
    handleAuthorClicked(author) {
      this.activeAuthorInfo = this.authors[author] || {};
      this.showInfoBox = true;
    },
    closeInfoBox() {
      this.showInfoBox = false;
    },
  },
});
