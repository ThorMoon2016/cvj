document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        // Ovo onemogućava skrolovanje na stranici kada je meni otvoren
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : 'auto';
    });
});




window.onload = function() {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Menja sliku svake 2 sekunde
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
};



document.addEventListener('DOMContentLoaded', function() {
    const poruciDugme = document.querySelector('.poruci-dugme');
    const infoContainer = document.querySelector('.info-container');

    poruciDugme.addEventListener('click', function() {
        infoContainer.style.display = 'block';
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const naruciDugme = document.querySelector('.naruci-dugme');
    const paypalContainer = document.getElementById('paypal-button-container');

    naruciDugme.addEventListener('click', function() {
        // Prikazi PayPal dugme kada se klikne na dugme "NARUČI"
        paypalContainer.style.display = 'block';

        // Ovde možete dodati kod za inicijalizaciju PayPal dugmeta, ako je potrebno
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const naruciButton = document.getElementById('naruciButton');
    const inputFields = document.querySelectorAll('input, textarea');

    inputFields.forEach(function(input) {
        input.addEventListener('input', function() {
            const allFieldsFilled = Array.from(inputFields).every(field => field.value.trim() !== '');
            naruciButton.disabled = !allFieldsFilled;
        });
    });
});


