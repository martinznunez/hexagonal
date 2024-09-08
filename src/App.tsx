import { useEffect } from "react";

import { getAllUser } from "./module/user/service/user/httpUser";
import { HttpMethod } from "./lib/domain/types";
import { renderDataUser } from "./module/user/repositories/repositoriesDataUser";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUser("example.api.com", {
          method: "GET" as HttpMethod,
        });

        const data = renderDataUser(response?.results);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>hexagonal</p>
    </div>
  );
}

export default App;
