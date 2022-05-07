import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const getMovies = async () => {
      const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;
      const response = await axios.get(
        `${REACT_APP_BASE_URL}/search/movie?api_key=${REACT_APP_API_KEY}&query=Jack+Reacher`
      );
      console.log({ data: response.data });
      return response.data;
    };
    getMovies();
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
    </div>
  );
}

export default App;
