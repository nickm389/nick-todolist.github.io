//Professor, this is my original code
// document.addEventListener('DOMContentLoaded',function(){

//     var task_lists = []; 
    
//     document.querySelector('#new-task').onsubmit = function(event){
                
//         const li = document.createElement('li'); 
//         let task_text = document.querySelector('#task').value; 
//         let task_priority = document.querySelector('#priority').value; 
//         let task_status = "pending"; 

//         let new_task_html = `<span class="priority"> <b>${task_text}</b> <u class="priority">${task_priority}</u> <i>${task_status}</i></u></span>
//                              <input type="radio" class="complete" name="task-complete" /> Task Completed   
//                              <button class="remove" type="button">Remove</button> 
                                                
//         `;
//         li.innerHTML=new_task_html 

//         document.querySelector('#tasks-list').append(li); 
//         document.querySelector('#task').value = ''; 

//         let new_task_list = {
//             description: task_text,
//             priority: task_priority,
//             status: task_status
//         };

//         task_lists.push(new_task_list); 

//         console.log(task_lists); 
       
//         return false; 

//     }

//     document.addEventListener('click', function(event){
//         element = event.target;
//         if (element.className == 'remove'){
//             element.parentElement.remove(); 
//         }
//         if (element.className == 'complete'){
//             const task = element.parentElement.querySelector('span');
//             const status = task.querySelector('i');
//             const text = task.querySelector('b');

//             status.innerText = 'completed';
//             status.style.color = 'green';
//             text.style.textDecoration = 'line-through';
//         }
//     })
// })

// This is code we worked on during your office hours

document.addEventListener('DOMContentLoaded',function(){

    var task_lists = []; 
    
    document.querySelector('#new-task').onsubmit = function(event){
                
        const li = document.createElement('li'); 
        let task_text = document.querySelector('#task').value; 
        let task_priority = document.querySelector('#priority').value; 
        let task_status = "pending"; 

        const new_index = task_lists.length 
        let new_task_html = `<span class="priority"> <b>${task_text}</b> <u class="priority">${task_priority}</u> <i>${task_status}</i></u></span>
                             <input type="radio" class="complete" name="task-complete" /> Task Completed   
                             <button class="remove" data-index="${new_index}" type="button">Remove</button> 
                                                
        `;
        li.innerHTML=new_task_html 

       // document.querySelector('#tasks-list').append(li); 
        document.querySelector('#task').value = ''; 

        let new_task_list = {
            description: task_text,
            priority: task_priority,
            status: task_status
        };

        task_lists.push(new_task_list); 
        renderview(task_lists)

        console.log(task_lists); 
       
        return false; 

    }

    function renderview(arr){
        if (arr.length <= 0) 
            return
        document.querySelector('#tasks-list').innerHTML = ""
        console.log(arr)
        for(let i = 0; i<arr.length; i++){
                        
            const li = document.createElement('li'); 
            let task_text =arr[i].description; 
            let task_priority = arr[i].priority;
            let task_status = arr[i].status;

            const new_index = i
            let new_task_html = `<span class="priority"> <b>${task_text}</b> <u class="priority">${task_priority}</u> <i>${task_status}</i></u></span>
                                <input type="radio" class="complete" name="task-complete" /> Task Completed   
                                <button class="remove" data-index="${new_index}" type="button">Remove</button> 
                                                    
            `;
            li.innerHTML=new_task_html 

            document.querySelector('#tasks-list').append(li); 

                
        }
    }

    document.addEventListener('click', function(event){
        element = event.target;
        if (element.className == 'remove'){
           // element.parentElement.remove(); 
            const indexToRemove =  parseInt( element.dataset.index)
            task_lists.splice(indexToRemove,1)
            console.log(task_lists); 

        }
        if (element.className == 'complete'){
            const task = element.parentElement.querySelector('span');
            const status = task.querySelector('i');
            const text = task.querySelector('b');

            status.innerText = 'completed';
            status.style.color = 'green';
            text.style.textDecoration = 'line-through';
        }

        renderview(task_lists)
    })
})
