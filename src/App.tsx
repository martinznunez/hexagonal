import { useEffect } from "react";

import { getAllUser } from "./module/user/service/httpUser";
import { HttpMethod } from "./infrastructure/domain/types";
import { renderData } from "./module/user/repositories/repositoriesDataUser";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUser("example.api.com", {
          method: "GET" as HttpMethod,
          headers: {
            Authorization: "Bearer your-token",
            "Custom-Header": "custom-value",
          },
        });

        const data = renderData(response?.results);
        console.log("data:", data);
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
