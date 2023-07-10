export function setAccessToken(token) {
    localStorage.setItem('accessToken', token);
  }
  
  export function getAccessToken() {
    return localStorage.getItem('accessToken');
  }
  
  export function removeAccessToken() {
    localStorage.removeItem('accessToken');
  }
  