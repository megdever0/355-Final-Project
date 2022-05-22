//udemy day 25 sticky nav
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

//udemy day 30 auto text effect
const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'Sign Up Below!'
let idx = 1
let speed = 200 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)

//write form info to file
let saveFile = () => {
    	
    // Get the data from each element on the form.
    const name = document.getElementById('first');
    const age = document.getElementById('last');
    const email = document.getElementById('email');

    let team = 'none';
    
    if(document.getElementById('lions').checked) {
        team = 'Lions';
    }else if(document.getElementById('bluejays').checked) {
        team = 'Blue Jays';
    }
    else if(document.getElementById('dolphins').checked) {
        team = 'Dolphins';
    }
    else if(document.getElementById('pythons').checked) {
        team = 'Pythons';
    }
    
    // This variable stores all the data.
    let data = 
        '\r First Name: ' + name.value + ' \r\n ' + 
        'Last Name: ' +age.value + ' \r\n ' + 
        'Email: ' + email.value + ' \r\n ' +
        "Team Preference:" +   team +  ' \r\n ' + ' \r\n ' +
        "Thank you for signing up to the Queens Intramural Softball League!"+ ' \r\n ' +
        'Please check your email in the next few days for payment information';
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'signupForm.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}

