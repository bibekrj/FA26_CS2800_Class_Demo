const STORAGE_KEY = 'contactFormData';

const form = document.querySelector("#contactForm");
const showBtn = document.querySelector("#showDataBtn")
const clearBtn = document.querySelector("#clearDataBtn");
const dataAll = document.querySelector("#dataGoesBrr")


//gets all data if any exists, otherwise returns empty array
function getContacts(){
    const data = localStorage.getItem(STORAGE_KEY);
    if (data === null){
        return [];
    }

    return JSON.parse(data);
}

function saveContactsData(formContactData){
    const data = JSON.stringify(formContactData)
    localStorage.setItem(STORAGE_KEY, data)
}

function addContactData(first_name, last_name){
    const contactDatas = {
        stored_first_name: first_name,
        stored_last_name: last_name
    }

    const allDataSoFar = getContacts()
    
    allDataSoFar.push(contactDatas);

    saveContactsData(allDataSoFar);
}


function handleFormSubmit(event){
    event.preventDefault();

    const firstName = document.querySelector("#first_name").value.trim();
    const lastName = document.querySelector("#last_name").value.trim();

 
    if (firstName === "" || lastName === ""){
        dataGoesBrr.textContent = "Enter Valid Data";
        return;
    }

    addContactData(firstName, lastName);

    dataGoesBrr.textContent = "Contact Data Saved Successfully";

    form.reset()

}


form.addEventListener("submit", handleFormSubmit());

