export default async function ({ $auth,store, redirect }) {
  // If the user is authenticated redirect to home page
  console.log($auth.loggedIn);
  if ($auth.state.loggedIn) {
    return redirect('/')
  }
}
