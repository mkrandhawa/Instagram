    //POST FUNCTION --> Post the completed form after the user has confirmed the code
    export const postData = async function postData(url, user) {
        try {
            const response = await fetch(url, {
              method: "POST",
              mode: "cors",
              cache: "no-cache",
              credentials: "same-origin",
              headers: {
                "Content-Type": "application/json",
              },
              redirect: "follow",
              referrerPolicy: "no-referrer",
              body: JSON.stringify(user),
            });
        
            if (!response.ok) { // If the response is not ok (status code outside 200-299)
              const errorData = await response.json();
              throw new Error(errorData.message || 'Something went wrong');
            }
        
            return response.json(); // If the response is ok, parse and return JSON
          } catch (error) {
            console.error('Error:', error);
            throw error; // Re-throw the error to be caught in the calling function
          }

        }
      