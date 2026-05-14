const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });


    // Expansão dos detalhes dos cursos
    const courseCards = document.querySelectorAll('.course-card');

    courseCards.forEach(card => {
        const btn = card.querySelector('.toggle-btn');
        btn.addEventListener('click', () => {
            card.classList.toggle('active');
        });
    });

