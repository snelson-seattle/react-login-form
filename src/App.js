import LoginForm from "./components/LoginForm";

function App() {
  return (
    <main
      className={`
      bg-[url("../public/img/background-image.jpg")]
      bg-cover
      bg-center 
      h-screen 
      w-screen        
      flex 
      flex-col 
      justify-center 
      items-center
      `}
    >
      <LoginForm />
    </main>
  );
}

export default App;
