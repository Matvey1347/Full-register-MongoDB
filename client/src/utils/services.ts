export const baseUrl = "http://localhost:5001/api";

export const postRequest = async (url: string, body: any) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body
  })

  const data = await response.json();
  if (!response.ok) {
    let message = data?.message || data;
    
    return { error: true, message };
  }

  return data;
}