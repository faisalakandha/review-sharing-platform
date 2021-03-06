import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// Pages for Boilerplate
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"


// Pages for Articles/blog
import PostPage from "./views/PostPage/PostPage";
import BlogPage from "./views/BlogPage/BlogPage";
import CreateBlogPage from "./views/BlogPage/Section.js/CreateBlogPage";

// Pages for Movie Discovery
import MovieDetail from "./views/MovieDetail/MovieDetail"
import MoviesLandingPage from "./views/DiscoverPage/MoviesLandingPage.js";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Your Content is loading. Please Wait......</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
	  {/* Public Pages */}
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/movies" component={Auth(MoviesLandingPage, null)} />
          <Route exact path="/blog" component={Auth(BlogPage, null)} />
          <Route exact path="/blog/create" component={Auth(CreateBlogPage, null)} />
          <Route exact path="/blog/post/:postId" component={Auth(PostPage, null)} />
          <Route exact path="/movie/:movieId" component={Auth(MovieDetail, null)} />
	
	 {/* Pages hidden for members */}
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
								 
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
