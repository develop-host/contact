//https://api.apispreadsheets.com/data/1utrpHYfjUbFJixb/

const $contactForm = document.querySelector('#js-contact-form')

$contactForm.addEventListener('submit', handleSubmit)

async function handleSubmit(e){
    e.preventDefault()

    const $form = e.target,
    $fullName = $form.querysSelector('#fullName'),
    $email = $form.querySelector('#email'),
    $message = $form.querySelector('#message'),
    response = await fetch(
        'https://api.apispreadsheets.com/data/1utrpHYfjUbFJixb', 
        {
        method:'POST',
        body: JSON.stringify({
            data:{
                full_name: $fullName.value,
                email: $email.value,
                message: $message.value

            }
        })
    })

    if (response.status === 201) allert('Form Submitted Successfully !')
    $form.reset()

}
