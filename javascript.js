// Script untuk validasi form kontak
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Form submitted successfully!");
    // document.getElementById("contact-form").submit(); // Uncomment ini untuk mengirim form
});

// Fungsi untuk validasi email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.05)";
        });

        card.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 100) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.card-container');
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        container.appendChild(clone);
    });
    

    const cardCount = cards.length;
    const duration = cardCount * 12;
    container.style.animationDuration = `${duration}s`;
});

document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('.hero .col1 h1');
    if (heading) {
        const text = heading.textContent;
        heading.textContent = '';
        

        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                heading.textContent += text[i];
            }, i * 80);
        }
    }
});

document.getElementById("file-pdf").addEventListener("click", function() {

    const cvFileName = "jangan-dipencet.pdf";
    
    const cvFilePath = "Assets/jangan-dipencet.pdf";
    
    const link = document.createElement("a");
    link.href = cvFilePath;
    link.download = cvFileName;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});