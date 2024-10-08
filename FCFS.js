      // Run Button

      document.getElementById('Output').addEventListener("click", function () {

        // Storing all Inputs -> Common class 
        let input_counter = document.querySelectorAll('.Burst-time-P');
        // console.log(input_counter);


        // IF Burst time not enterted -> Run a loop for value checks
        for (var i = 0; i < input_counter.length; i++) {

            // Checks condition -> If True -> If value empty
            if (input_counter[i].value == '') {
                // Alert Message
                alert('Plz enter the Burst Time');
            }

        }




        // Array to Store all Input values

        let arr1 = [0, document.getElementById('Burst-time-P1').value, document.getElementById('Burst-time-P2').value, document.getElementById('Burst-time-P3').value, document.getElementById('Burst-time-P4').value];

        // Array for stroring completion time -> for Table-2 td
        let arr_completion_time = [];


        let sum = 0;


        // GANT CHARTT Time

        // Loop for completion Time
        for (var i = 0; i < arr1.length; i++) {
            // 0+=6 (input_bs_time) -> 6 and so on for each array value
            sum += Number(arr1[i]);

            // Every sum valued pushed to array 
            arr_completion_time.push(sum);

            // Gantt graph display
            document.getElementById('completion_time').innerHTML += `<div id="completion_time_sum">${sum}<div>`
        }




        // Gant-Chart Process Id display
        let process_id = document.querySelectorAll('.Process');


        for (var i = 0; i < process_id.length; i++) {

            // process_id[i].innerText;

            document.querySelector('#Process_id_box_gant').innerHTML += `
            
            <div class="Gant-chart-p">${process_id[i].innerText}</div>`
        }







        // ARRIVAL TIME


        let P_arrival_time = document.querySelectorAll('.P_arrival_time_table')


        // Array to store all Time inputs
        let arr_arrival_time = [0,1,2,3];

        for(let i=0;i<1;i++)
        {
            for(let j=0;j<P_arrival_time.length;j++)
            {
                P_arrival_time[j].innerText = arr_arrival_time[i];
                i++;
            }
        }

     

        
        // Burst Time

        // P1-BURST-TIME

        // Var storing -> table-2 -> td -> for stroing the Busrt time
        let p1_bs_time = document.getElementById('P1_Busrt_time_table');
        // td -> innertext -> Burst time input value of process-1
        p1_bs_time.innerText = `${document.getElementById('Burst-time-P1').value}`

        
        
        // P2-BURST-TIME

        let p2_bs_time = document.getElementById('P2_Busrt_time_table');
        p2_bs_time.innerText = `${document.getElementById('Burst-time-P2').value}`

        // P3-BURST-TIME

        let p3_bs_time = document.getElementById('P3_Busrt_time_table');
        p3_bs_time.innerText = `${document.getElementById('Burst-time-P3').value}`

        // P4-BURST-TIME

        let p4_bs_time = document.getElementById('P4_Busrt_time_table');
        p4_bs_time.innerText = `${document.getElementById('Burst-time-P4').value}`






        // COMPLETION TIME


        // P1 completion_Time

        // Var storing -> Tabke-2 -> td
        let p1_comp_time = document.getElementById('P1_Completion_time_table');
        // innertext -> array completion time first element -> obtained through pushing sum values into the array -> Sum vslues: gantt chart values
        p1_comp_time.innerText = `${arr_completion_time[1]}`;


        // P2 completion_Time

        let p2_comp_time = document.getElementById('P2_Completion_time_table');
        p2_comp_time.innerText = `${arr_completion_time[2]}`;


        // P1 completion_Time

        let p3_comp_time = document.getElementById('P3_Completion_time_table');
        p3_comp_time.innerText = `${arr_completion_time[3]}`;


        // P4 completion_Time

        let p4_comp_time = document.getElementById('P4_Completion_time_table');
        p4_comp_time.innerText = `${arr_completion_time[4]}`;




        // TURNAROUND-TIME


        // P1 Turn-around-time


        // Td of Table-2 -> Stored in-> P1_turn_around var
        let p1_turnaround_time = document.getElementById('p1_turnaround_time_table');
        // Innertext of td -> array completion first element - array_arrival_time first element
        p1_turnaround_time.innerText = `${Number(arr_completion_time[1]) - Number(arr_arrival_time[0])}`;


        // P2  Turn-around-time

        let p2_turnaround_time = document.getElementById('p2_turnaround_time_table');
        p2_turnaround_time.innerText = `${Number(arr_completion_time[2]) - Number(arr_arrival_time[1])}`;


        // P3  Turn-around-time

        let p3_turnaround_time = document.getElementById('p3_turnaround_time_table');
        p3_turnaround_time.innerText = `${Number(arr_completion_time[3]) - Number(arr_arrival_time[2])}`;


        // P4  Turn-around-time

        let p4_turnaround_time = document.getElementById('p4_turnaround_time_table');
        p4_turnaround_time.innerText = `${Number(arr_completion_time[4]) - Number(arr_arrival_time[3])}`;



    }, { once: true });

