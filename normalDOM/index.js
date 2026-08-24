const root = document.getElementById('container')
const button = document.getElementById('btn')

const h2 = document.createElement('h2');
h2.innerHTML = 'Resume Builder';

const loader = document.createElement('h1');

const img = document.createElement('img');

function buildresume() {
    try {
        root.innerHTML = '';
        loader.innerHTML = 'Loading...';
        root.appendChild(loader);

        img.src = 'https://www.travelaroundtheworldblog.com/wp-content/uploads/2025/10/Worlds-of-Adventure-Tickets-in-Dubai-1024x559.jpg';
        img.setAttribute('height', '100');
        img.setAttribute('width', '100');

        root.appendChild(img);
        root.appendChild(h2);

        
        const table = document.createElement('table');
        table.border = '1';

    
        const row1 = document.createElement('tr');

        const nameHeading = document.createElement('th');
        nameHeading.innerHTML = 'Name';

        const nameValue = document.createElement('td');
        nameValue.innerHTML = 'SHIVAM CHOUDHARY';

        row1.appendChild(nameHeading);
        row1.appendChild(nameValue);
        row1.style.backgroundColor = 'skyblue';

        const row2 = document.createElement('tr');

        const qualificationHeading = document.createElement('th');
        qualificationHeading.innerHTML = 'Qualification';

        const qualificationValue = document.createElement('td');
        qualificationValue.innerHTML = 'B.TECH <br> 12th <br> 10th';

        row2.appendChild(qualificationHeading); 
        row2.appendChild(qualificationValue);
        row2.style.backgroundColor = 'lightgray';
        const row3 = document.createElement('tr');

        const streamHeading = document.createElement('th');
        streamHeading.innerHTML = 'Stream';

        const streamValue = document.createElement('td');
        streamValue.innerHTML = 'COMPUTER SCIENCE AND ENGINEERING';

        row3.appendChild(streamHeading);
        row3.appendChild(streamValue);
        row3.style.backgroundColor = 'lightgreen';

        table.appendChild(row1);
        table.appendChild(row2);
        table.appendChild(row3);

        root.appendChild(table);
    }
    catch (e) {
        console.log(e);
        loader.innerHTML = 'Error loading resume';
    }
    finally {
        if (root.contains(loader)) {
            root.removeChild(loader);
        }
    }
}

button.addEventListener('click', buildresume);