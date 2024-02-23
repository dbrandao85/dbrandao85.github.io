const traduction = {
    'pt': {
        'text-about' : 'Sobre',
        'text-skills' : 'Tecnologias',
        'text-projects' : 'Projetos',
        'text-education' : 'Educação'
    },
    'en' : {
        'text-about' : 'About',
        'text-skills' : 'Skills',
        'text-projects' : 'Projects',
        'text-education' : 'Education'
    }
}

function changeLanguage(language){
    const elements = document.querySelectorAll('[id]');
    elements.forEach(element => {
        const key = element.id;
        if(element.id.includes('text')){
            element.textContent = traduction[language][key];
        }
    });
}

window.onload = changeLanguage('pt');
