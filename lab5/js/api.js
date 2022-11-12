// CRUD operations

const BASE_URL = "http://127.0.0.1:5000";
const RESOURCE_URL = `${BASE_URL}/hamsters`;

let hamsters = [];

const baseRequest = async ({ url = "", method = "GET", body = null }) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "Application/json",
      },
    };

    if (body) {
      reqParams.body = body;
      hamsters.push(body);
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

// UPDATE
export const editHamster = (id, body) => {
  baseRequest({ url: `/${id}`, method: "PATCH", body });
};

// DELETE
export const deleteHamster = (id) => {
  baseRequest({ url: `/${id}`, method: "DELETE" });
};
