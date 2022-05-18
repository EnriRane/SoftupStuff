export default async function fetchFromGivenLink(){
   fetch("https://animechan.vercel.app/api/random ")
   .then(response => response.json())
    .then(data=>console.log(data))
    .catch(err =>{console.log(err)});
}
