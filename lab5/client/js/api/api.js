const BASE_URL = "http://localhost:3000/api";
const RESOURCE_URL = `${BASE_URL}/hamsters`;

const baseRequest = async ({ url = "", method = "GET", body = null }) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      reqParams.body = JSON.stringify(body);
    }

    return await fetch(`${RESOURCE_URL}${url}`, reqParams);
  } catch (err) {}
};

// GET
export const getAllHamsters = async () => {
  const rawRes = await baseRequest({ method: "GET" });

  return rawRes.json();
};

// POST
export const postHamster = (body) => baseRequest({ method: "POST", body });

// PUT
export const editHamster = (id, body) =>
  baseRequest({ url: `/${id}`, method: "PUT", body });

// DELETE
export const deleteHamster = (id) =>
  baseRequest({ url: `/${id}`, method: "DELETE" });
