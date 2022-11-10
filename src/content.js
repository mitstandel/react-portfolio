export const getContents = () => fetch(`${process.env.PUBLIC_URL}json/content.json`, {
  headers : { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
}).then( async (response) => await validateResponse(response));

export const validateResponse = async (response) => {
  const intercepted = response.clone();
  if (!intercepted.ok) {
    throw new TypeError('Network Error');
  }

  const jsonResponse = await intercepted.json();
  return jsonResponse;
};