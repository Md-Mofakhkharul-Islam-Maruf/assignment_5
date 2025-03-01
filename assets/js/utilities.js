document.getElementById('btnn').addEventListener('click',
    function (event) {
        event.preventDefault()
        document.getElementById('container').style.display="none"
    })

document.getElementById('2nd-btn').addEventListener('click',
    function (event) {
        event.preventDefault()
        alert('You click here')
        // return parse_floatand_task('task-assign')
        const task = document.getElementById('task-assign').innerText
        document.getElementById('task-assign').innerText = task - 1;

        const taskChecked = document.getElementById('task-checked').innerText
        const newtask = parseInt(taskChecked) + 1;
        document.getElementById('task-checked').innerText = newtask

        let old_status = document.getElementById('second-card-work').innerText
        let new_status = 'You have complete ' + old_status + ' at ' + new Date().toLocaleTimeString()
        document.getElementById('status-card-2').innerText = new_status

        document.getElementById("2nd-btn").disabled = true;
    }
)


document.getElementById('1st-button').addEventListener('click',
    function (event) {
        event.preventDefault()
        alert('You click here')
        // return parse_floatand_task('task-assign')
        const task = document.getElementById('task-assign').innerText
        document.getElementById('task-assign').innerText = task - 1;

        const taskChecked = document.getElementById('task-checked').innerText
        const newtask = parseInt(taskChecked) + 1;
        document.getElementById('task-checked').innerText = newtask

        // let old_status = document.getElementById('first-card-work').innerText
        // let new_status = 'You have complete ' + old_status + ' at ' + new Date().toLocaleTimeString()
        // document.getElementById('status-card-1').innerText = new_status


        const firstheading = document.getElementById('first-card-work').innerText
        const time = new Date().toLocaleTimeString()
        const conteiner = document.getElementById("container")
        const div = document.createElement("div");
        div.classList.add("bg-blue-500")
        div.innerHTML =
            `
        <p>You have Complete The Task ${firstheading} at ${time}</p>
        `
        conteiner.appendChild(div)





        document.getElementById("1st-button").disabled = true;
    }
)




// document.getElementById('task').addEventListener('click',
//     function (event) {
//         event.preventDefault()
//         alert('You click here')
//         // return parse_floatand_task('task-assign')
//         const task = document.getElementById('task-assign').innerText
//         document.getElementById('task-assign').innerText = task - 1;

//         const taskChecked = document.getElementById('task-checked').innerText
//         const newtask = parseInt(taskChecked) + 1;
//         document.getElementById('task-checked').innerText = newtask
//         document.getElementById("task").disabled = true;
//     }
// )


// document.getElementById('task').addEventListener('click',
//     function (event) {
//         event.preventDefault()
//         alert('You click here')
//         // return parse_floatand_task('task-assign')
//         const task = document.getElementById('task-assign').innerText
//         document.getElementById('task-assign').innerText = task - 1;

//         const taskChecked = document.getElementById('task-checked').innerText
//         const newtask = parseInt(taskChecked) + 1;
//         document.getElementById('task-checked').innerText = newtask
//         document.getElementById("task").disabled = true;
//     }
// )


// document.getElementById('task').addEventListener('click',
//     function (event) {
//         event.preventDefault()
//         alert('You click here')
//         // return parse_floatand_task('task-assign')
//         const task = document.getElementById('task-assign').innerText
//         document.getElementById('task-assign').innerText = task - 1;

//         const taskChecked = document.getElementById('task-checked').innerText
//         const newtask = parseInt(taskChecked) + 1;
//         document.getElementById('task-checked').innerText = newtask
//         document.getElementById("task").disabled = true;
//     }
// )


// document.getElementById('task').addEventListener('click',
//     function (event) {
//         event.preventDefault()
//         alert('You click here')
//         // return parse_floatand_task('task-assign')
//         const task = document.getElementById('task-assign').innerText
//         document.getElementById('task-assign').innerText = task - 1;

//         const taskChecked = document.getElementById('task-checked').innerText
//         const newtask = parseInt(taskChecked) + 1;
//         document.getElementById('task-checked').innerText = newtask
//         document.getElementById("task").disabled = true;
//     }
// )