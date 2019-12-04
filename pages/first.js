// Loads Header and Navbar
$('.app').prepend(ejs.rr('components/head.ejs', {
  page: 'Home'
}))
$('.app').prepend(ejs.rr('components/navbar.ejs', {
  page: 'home'
}))

//Loads Page Data
$('.app').append(ejs.rr('views/home.ejs', {
  title: 'Immigrants',
  subtitle: 'Background'
}))
//Load Footer Last
$('.app').append(ejs.rr('components/footer.ejs'));