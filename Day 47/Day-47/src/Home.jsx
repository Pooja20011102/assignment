import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToUser = () => {
    navigate("/user/101");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToUser}>Go to User 101</button>
    </div>
  );
}

export default Home;
