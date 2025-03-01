// navbar section 
document.getElementById("theme-btn").addEventListener("click",
    function(){
        const randomTheme = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomTheme;
    }
)


// discover somthing
document.getElementById("DiscoverSomthing").addEventListener("click",
    function(){
        window.location.href = "../../blog.html"
        
    }
)
// date and time 
const today = new Date(); 
const dayOfWeek = today.toLocaleString('default', { weekday: 'short' }); 
const month = today.toLocaleString('default', { month: 'short' }); 
const day = today.getDate(); 
const year = today.getFullYear(); 

const formattedDate = `${dayOfWeek}, ${month} ${day}, ${year}`; 
document.getElementById("dateAndTime").innerText = formattedDate;