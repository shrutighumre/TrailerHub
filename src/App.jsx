// //App.jsx

// import React from "react";
// import Card from "./Card";
// import "./index.css";

// function App() {
//   return (
//     <>
//       <Card
//         movie_name="Openheimer"
//         actor_name="Cilian Murphy"
//         poster_link="https://m.media-amazon.com/images/I/81218n6JFgL._AC_UF1000,1000_QL80_.jpg"
//       />
//       <Card
//         movie_name="Avengers"
//         actor_name="Rober Doney Jr."
//         poster_link="https://m.media-amazon.com/images/I/81rJDS96GiL._AC_UF894,1000_QL80_.jpg"
//       />
//       <Card
//         movie_name="Spiderman"
//         actor_name="Tom Holland"
//         poster_link="https://i.etsystatic.com/18242346/r/il/bf66a8/3578290627/il_fullxfull.3578290627_or7o.jpg"
//       />
//       <Card
//         movie_name="Deadpool"
//         actor_name="Jack Hugman"
//         poster_link="https://posterspy.com/wp-content/uploads/2024/05/PosterDeadpoolWolverine16.jpg"
//       />
//       <Card
//         movie_name="Batman"
//         actor_name="Ben Affleck"
//         poster_link="https://i.ebayimg.com/00/s/MTYwMFgxMDM0/z/qtAAAOSw81tkWi6C/$_57.JPG?set_id=8800005007"
//       />
//       <Card
//         movie_name="2012 The End"
//         actor_name="John Cusack"
//         poster_link="https://lh5.googleusercontent.com/proxy/ZUdNe6wgtQNbyFYXd5CqxW7Z-qgnCxK8rwcrHBth13keaDMAeQ19GNEsE2dxGax0EuSJQeVX3RdyWJnOKjfkdeZme8yjpM1TBp7m6abPzFksLdA0ZQ"
//       />
//       <Card
//         movie_name="Iron Man"
//         actor_name="Robert Downey Jr."
//         poster_link="https://c8.alamy.com/comp/RR5MCR/iron-man-2-2010-directed-by-jon-favreau-and-starring-robert-downey-jr-mickey-rourke-and-gwyneth-paltrow-RR5MCR.jpg"
//       />
//       <Card
//         movie_name="Thor"
//         actor_name="Chris Hemsworth"
//         poster_link="https://rukminim2.flixcart.com/image/850/1000/kdoup3k0-0/poster/c/w/9/large-thor03-thor-poster-avengers-thor-wall-poster-thor-movie-original-imafujeugpmspz4s.jpeg?q=90&crop=false"
//       />
//       <Card
//         movie_name="Loki"
//         actor_name="Tom Hiddleston"
//         poster_link="https://rukminim2.flixcart.com/image/850/1000/kzegk280/poster/d/n/u/medium-loki-tom-hiddleton-superhero-poster-no-frame-no-sticker-l-original-imagbf8jtz3nzvvn.jpeg?q=20&crop=false"
//       />
//       <Card
//         movie_name="Jawaan"
//         actor_name="Shahruk Khan"
//         poster_link="https://pbs.twimg.com/media/FrLJIz0WYAA7h52?format=jpg&name=4096x4096"
//       />
//       <Card />
//     </>
//   );
// }

// export default App;

/////////////////////

//App.jsx
import React from "react";
import Card from "./Card";
import "./index.css";

function App() {
  return (
    <>
      <Card
        movie_name="Oppenheimer"
        actor_name="Cillian Murphy"
        poster_link="https://m.media-amazon.com/images/I/81218n6JFgL._AC_UF1000,1000_QL80_.jpg"
        video_url="https://www.youtube.com/embed/8A4jXFiH3jM" // Add your video URL
      />
      <Card
        movie_name="Avengers"
        actor_name="Robert Downey Jr."
        poster_link="https://m.media-amazon.com/images/I/81rJDS96GiL._AC_UF894,1000_QL80_.jpg"
        video_url="https://www.youtube.com/embed/eOrNdBpGMv8" // Add your video URL
      />
      <Card
        movie_name="Spiderman"
        actor_name="Tom Holland"
        poster_link="https://i.etsystatic.com/18242346/r/il/bf66a8/3578290627/il_fullxfull.3578290627_or7o.jpg"
        video_url="https://www.youtube.com/embed/rk-dF1lIbIg" // Add your video URL
      />
      <Card
        movie_name="Deadpool"
        actor_name="Ryan Reynolds"
        poster_link="https://posterspy.com/wp-content/uploads/2024/05/PosterDeadpoolWolverine16.jpg"
        video_url="https://www.youtube.com/embed/Xithigfg7dA" // Add your video URL
      />
      <Card
        movie_name="Batman"
        actor_name="Ben Affleck"
        poster_link="https://i.ebayimg.com/00/s/MTYwMFgxMDM0/z/qtAAAOSw81tkWi6C/$_57.JPG?set_id=8800005007"
        video_url="https://www.youtube.com/embed/rg_zwK_sSEY" // Add your video URL
      />
      <Card
        movie_name="2012 The End"
        actor_name="John Cusack"
        poster_link="https://lh5.googleusercontent.com/proxy/ZUdNe6wgtQNbyFYXd5CqxW7Z-qgnCxK8rwcrHBth13keaDMAeQ19GNEsE2dxGax0EuSJQeVX3RdyWJnOKjfkdeZme8yjpM1TBp7m6abPzFksLdA0ZQ"
        video_url="https://www.youtube.com/embed/rvEyxpWMxc0" // Add your video URL
      />
      <Card
        movie_name="Iron Man"
        actor_name="Robert Downey Jr."
        poster_link="https://c8.alamy.com/comp/RR5MCR/iron-man-2-2010-directed-by-jon-favreau-and-starring-robert-downey-jr-mickey-rourke-and-gwyneth-paltrow-RR5MCR.jpg"
        video_url="https://www.youtube.com/embed/8ugaeA-nMTc" // Add your video URL
      />
      <Card
        movie_name="Thor"
        actor_name="Chris Hemsworth"
        poster_link="https://rukminim2.flixcart.com/image/850/1000/kdoup3k0-0/poster/c/w/9/large-thor03-thor-poster-avengers-thor-wall-poster-thor-movie-original-imafujeugpmspz4s.jpeg?q=90&crop=false"
        video_url="https://www.youtube.com/embed/JOddp-nlNvQ" // Add your video URL
      />
      <Card
        movie_name="Loki"
        actor_name="Tom Hiddleston"
        poster_link="https://rukminim2.flixcart.com/image/850/1000/kzegk280/poster/d/n/u/medium-loki-tom-hiddleton-superhero-poster-no-frame-no-sticker-l-original-imagbf8jtz3nzvvn.jpeg?q=20&crop=false"
        video_url="https://www.youtube.com/embed/nW948Va-l10" // Add your video URL
      />
      <Card
        movie_name="Jawaan"
        actor_name="Shahrukh Khan"
        poster_link="https://pbs.twimg.com/media/FrLJIz0WYAA7h52?format=jpg&name=4096x4096"
        video_url="https://www.youtube.com/embed/Bm7vkB1qg-8" // Add your video URL
      />
      <Card />
    </>
  );
}

export default App;
