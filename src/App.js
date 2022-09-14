
import './App.css';
import UAuth from '@uauth/js';





function App() {

  const uauth = new UAuth(
    {
      clientID: "d161167c-1e69-4fe9-b2ee-138d670de5ee",
      redirectUri: "http://localhost:3000",
      scope: "openid wallet"
    }
  )



window.login = async () => {
  try {
    const authorization = await uauth.loginWithPopup()
 
    console.log(authorization)
  } catch (error) {
    console.error(error)
  }
}


window.logout = async () => {
  await uauth.logout()
  console.log('Logged out with Unstoppable')
}


  return (
    <div className="App">
google
    </div>
  );
}

export default App;
