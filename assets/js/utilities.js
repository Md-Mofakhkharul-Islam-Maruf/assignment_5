document.getElementById('clear-history').addEventListener('click',
    function (event) {
        event.preventDefault()
        document.getElementById('container').innerHTML = ''
    })
document.getElementById("go").addEventListener("click",
    function () {
        window.location.href = "../../blog.html";

    }
)

// 1st card button
document.getElementById('card-1-btn').addEventListener('click',
    function (event) {
        event.preventDefault();

        alert('You click here');
        parse_floatand_task('task-number');
        parse_floatand_task_plus('plus');
        document.getElementById('card-1-btn').disabled = true;
        append('task-heading-1')
    }
)


// 2nd card button
document.getElementById('card-2-btn').addEventListener('click',
    function (event) {
        event.preventDefault();

        alert('You click here');
        parse_floatand_task('task-number');
        parse_floatand_task_plus('plus');
        document.getElementById('card-2-btn').disabled = true;
        append('task-heading-2')
    }
)



// 3rd card button
document.getElementById('card-3-btn').addEventListener('click',
    function (event) {
        event.preventDefault();

        alert('You click here');
        parse_floatand_task('task-number');
        parse_floatand_task_plus('plus');
        document.getElementById('card-3-btn').disabled = true;
        append('task-heading-3')
    }
)


// 4th card button
document.getElementById('card-4-btn').addEventListener('click',
    function (event) {
        event.preventDefault();

        alert('You click here');
        parse_floatand_task('task-number');
        parse_floatand_task_plus('plus');
        document.getElementById('card-4-btn').disabled = true;
        append('task-heading-4')
    }
)


// 5th card button
document.getElementById('card-5-btn').addEventListener('click',
    function (event) {
        event.preventDefault();

        alert('You click here');
        parse_floatand_task('task-number');
        parse_floatand_task_plus('plus');
        document.getElementById('card-5-btn').disabled = true;
        append('task-heading-5')
    }
)


// 6th card button
document.getElementById('card-6-btn').addEventListener('click',
    function (event) {
        event.preventDefault();

        alert('You click here');
        parse_floatand_task('task-number');
        parse_floatand_task_plus('plus');
        document.getElementById('card-6-btn').disabled = true;
        append('task-heading-6')
    }
)
console.log(parse_floatand_task('tasknumber'))
// console.log(parse_floatand_task('task-number'))

// if(parse_floatand_task('task-number')==1){
//     alert('You have done enough')
// }