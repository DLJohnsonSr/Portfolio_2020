const contactForm = document.getElementById("form-contact");

// email form
contactForm.addEventListener("submit", function submitEmail (event) {
   
    event.preventDefault();

    // display message in form
    const responseNode = document.createElement("p");
    responseNode.id = "form-contact-message";
    responseNode.innerHTML = "Message submitted";
    responseNode.classList.add("form-message");
    contactForm.lastElementChild.before(responseNode);

    // remove message after 3 seconds
    setTimeout(()=> responseNode.remove(), 3000);

    return false;
});
