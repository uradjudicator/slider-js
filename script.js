const heroSection = document.querySelector('.hero')
const title = document.querySelector('.title')
const text = document.querySelector('.text')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')
let i = 0
const slides = [ 
    {
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b34a7ef4e05a4fceb7fbf5961342af37_9366/Humanrace_Samba_Shoes_Black_IE7291_011_hover_standard.jpg',
        title:'Humanrace Samba Shoes',
        description:`Pharrell Williams leans into adidas heritage and updates the classic Samba shoes. As the most elevated interpretation of the iconic silhouette to date, the Humanrace Samba is created with expert craftsmanship and ultra-premium materials in tonal colorways — all done with a clear nod to the Samba's soccer roots. The shoe features noticeable deviations from the traditional Samba, including high-end leather upper and toe-cap, leather lining, and leather laces.`
    },
    {
        image:'https://lzd-img-global.slatic.net/g/p/cc85e250642ca3ca51a689e3db50a65c.jpg_720x720q80.jpg_.webp',
        title:'REWORKED CLASSIC TRAINERS WITH CONTEMPORARY STYLISTIC DETAILS.',
        description:`When you thought the adidas Superstar shoes could not get any bolder, this pair amplifies the classic '70s trainer for modern fashion. The enlarged proportions and the equally big statement are made apparent with the iconic serrated 3-Stripes. The full leather upper stays true to its vintage roots while reimagining the silhouette to keep things fresh. Take every step in confidence when the shell toe leads the way.`
    },
    {
        image:'https://assets.adidas.com/images/w_450,f_auto,q_auto/5dd810c0287244c1ba4eaf310077018b_9366/HQ7034_HM1.jpg',
        title:'SIGNATURE SHOES FROM ADIDAS BASKETBALL AND DAMIAN LILLARD.',
        description:`Never run from the grind. With the latest signature shoes from Damian Lillard and adidas Basketball, you don't have to. Built for outstanding durability, these Dame 8 Extply shoes ride on a dynamic Bounce Pro midsole that combines elevated stability with lightweight, flexible cushioning. The internal sock construction and TPU propulsion plate keep you locked down and moving with confidence, whether you're spending hours in the gym dialing it up from long range or knocking down game-winners like one of the game's best clutch performers.`
    },
    {
        image:'https://images.journeys.com/images/products/1_595988_FS_ALT1C.JPG',
        title:'THESE SHOES ARE MADE IN PART WITH RECYCLED MATERIALS.',
        description:`Purpose built for your best comfort ever. Inspired by style ahead of its time, this pair of adidas shoes takes shape in pure comfort. It unites a minimalist textile upper and a thick foam outsole with high sidewalls that lock your foot into place. What's that mean for you? A super-soft landing with every step — and a totally modern look.

        Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste..`
    }
]

title.textContent = slides[0].title
text.textContent = slides[0].description
heroSection.style.backgroundImage = `URL(${slides[0].image})`

nextButton.addEventListener('click', () => {
    i++

    if(i === slides.length){
        i = 0
    }
    title.textContent = slides[i].title
text.textContent = slides[i].description
heroSection.style.backgroundImage = `URL(${slides[i].image})`
})