const helper=()=>{
    const colle = document.getElementById('collect').value; // Use lowercase 'value'

if (colle === 'depression') {
    location.href =("depression.html");
} else {
    alert('Sorry only depression related information is there');
}
  }
  const login=document.querySelector("#login");
  login.addEventListener("click",()=>{
    location.href="login.html";
  })