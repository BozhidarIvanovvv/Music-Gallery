const fetcher = async (method, url, data) => {
  try {
    const user = localStorage.getItem("auth");
    const auth = JSON.parse(user || "{}");

    let headers = {};

    if (auth.accessToken) {
      headers["X-Authorization"] = auth.accessToken;
    }
    let initialRequest;

    if (method === "GET") {
      initialRequest = fetch(url, { headers });
    } else {
      initialRequest = fetch(url, {
        method,
        headers: {
          ...headers,
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }
    const response = await initialRequest;
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const get = fetcher.bind({}, "GET");
export const post = fetcher.bind({}, "POST");
export const patch = fetcher.bind({}, "PATCH");
export const put = fetcher.bind({}, "PUT");
export const remove = fetcher.bind({}, "DELETE");
