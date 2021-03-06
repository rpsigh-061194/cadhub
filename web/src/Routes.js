// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      {/* TODO add add min role to users and users/new  */}
      <Private unauthenticated="home" role="admin">
        <Route path="/users" page={UsersPage} name="users" />
        <Route path="/users/new" page={NewUserPage} name="newUser" />
      </Private>
      <Private unauthenticated="home">
        <Route path="/users/{id:Int}/edit" page={EditUserPage} name="editUser" />
      </Private>
      <Route path="/users/{id:Int}" page={UserPage} name="user" />
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/parts/new" page={NewPartPage} name="newPart" />
      <Route path="/parts/{id:Int}/edit" page={EditPartPage} name="editPart" />
      <Route path="/parts/{id:Int}/ide" page={IdePartPage} name="partIde" />
      <Route path="/parts/{id:Int}" page={PartPage} name="part" />
      <Route path="/parts" page={PartsPage} name="parts" />
      <Route path="/blog-post/{id:Int}" page={BlogPostPage} name="blogPost" />
      <Private unauthenticated="home">
        <Route path="/admin/posts/new" page={NewPostPage} name="newPost" />
        <Route path="/admin/posts/{id:Int}/edit" page={EditPostPage} name="editPost" />
        <Route path="/admin/posts/{id:Int}" page={PostPage} name="post" />
        <Route path="/admin/posts" page={PostsPage} name="posts" />
      </Private>
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={PartsPage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
