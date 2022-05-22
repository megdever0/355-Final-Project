//udemy day 25 sticky nav
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 400) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

//udemy  day 35 image carosel
const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 4000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 4000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})


//udemy day 47 testamonial
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Buck Showalter',
    position: 'Lions Head Coach',
    photo:
      '/people/buck.jpg',
    text:
      "I really enjoy coaching the Lions Team. The teams are competitive and work really hard. I was considering some of the players to come to Mets.",
  },
  {
    name: 'Sarah Wilson',
    position: 'Blue Jays Player',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "Being part of the Queens Intramural Softball League is so fun! We really have a great community of people involved. I look forward to games all week. Let's Go Blue Jays!",
  }
]

let idex = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idex]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idex++

  if (idex > testimonials.length - 1) {
    idex = 0
  }
}

setInterval(updateTestimonial, 10000)

