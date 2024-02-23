const traduction = {
    'pt': {
        'text-about' : 'Sobre',
        'text-skills' : 'Tecnologias',
        'text-projects' : 'Projetos',
        'text-education' : 'Educação',
        'text-about-content' : 'Sou um desenvolvedor com experiência em .NET, Java, SQL, JS, CSS e HTML. Eu trabalho principalmente com back-end, mas também tenho conhecimento no front-end, incluindo frameworks como Angular',
        'text-lp' : 'Linguagens de Programação e Ferramentas',
        'text-sqlqueries' : 'Queries SQL e ORMs (Entity, Dapper e NPOCO)',
        'text-mvc' : 'Arquitetura MVC',
        'text-scrum' : 'Desenvolvimento Ágil e Scrum',
        'text-project-content' : 'Esse são alguns projetos pessoais de estudos:',
        'text-emuladortc' : 'Emulador para Terminal de Consulta da Gertec',
        'text-gamesearch' : 'Pesquisar jogo por gênero, consumindo a API FreeToGame',
        'text-education-date' : 'Julho 2020',
        'text-education-level' : 'Bacharel em Ciências da Computação'
    },
    'en' : {
        'text-about' : 'About',
        'text-skills' : 'Skills',
        'text-projects' : 'Projects',
        'text-education' : 'Education',
        'text-about-content' : 'I\'m a developer with experience in .NET, Java, SQL, JS, CSS, and HTML. I primarily work on the back-end, but I also have knowledge in front-end, including frameworks like Angular.',
        'text-lp' : 'Programming Languages & Tools',
        'text-sqlqueries' : 'SQL Queries and ORMs (Entity, Dapper and NPOCO)',
        'text-mvc' : 'MVC Architecture',
        'text-scrum' : 'Agile Development & Scrum',
        'text-project-content' : 'I have some personal projects, all then for study:',
        'text-emuladortc' : 'Emulator for Consult Terminal of Gertec',
        'text-gamesearch' : 'Search a game, using the API FreeToGame',
        'text-education-date' : 'July 2020',
        'text-education-level' : 'Bachelor in Science of Computer'
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
