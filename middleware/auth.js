export default function ({ $auth, redirect }) {
  // Add the userAgent property to the context
  if (!$auth.loggedIn) {
    return redirect("/auth/login");
  }
}
