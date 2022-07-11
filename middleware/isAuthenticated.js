export default async function ({ $auth,store, redirect }) {
  // If the user is authenticated redirect to home page
  console.log($auth.loggedIn);
  if (!$auth.loggedIn) {
    return redirect('/auth/login')
  }
  // if ($auth.loggedIn) {
  //   return redirect('/')
  // }
}
