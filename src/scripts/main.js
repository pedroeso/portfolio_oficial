document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

window.addEventListener('scroll', function() {
    const skills = document.getElementById('skills');

    // Calcula a posição da parte inferior da div
    const bottomOfSkills = skills.offsetTop + skills.offsetHeight;

    // Calcula a posição atual do scroll
    const scrollPosition = window.scrollY + window.innerHeight;

    // Verifica se o scroll chegou à div
    if (scrollPosition > bottomOfSkills) {
      skills.classList.remove('hidden'); // Revela a div
    } else {
      skills.classList.add('hidden'); // Oculta a div
    }
});


window.addEventListener('scroll', function() {
  const projetos = document.getElementById('projetos');

  // Calcula a posição da parte inferior da div
  const bottomOfSkills = skills.offsetTop;

  // Calcula a posição atual do scroll
  const scrollPosition = window.scrollY;

  // Verifica se o scroll chegou à div
  if (scrollPosition > bottomOfSkills) {
    projetos.classList.remove('hidden'); // Revela a div
  } else {
    projetos.classList.add('hidden'); // Oculta a div
  }
});


