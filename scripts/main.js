// doctors lightning
import doctorsBuilder from "./doctorFactory.js"
import petBuilder from "./petFactory.js"

const doctor1 = doctorsBuilder.doctor("Paulson", "Cardiologist", "malpractice jail")
console.log(doctor1)

// Pet lightning
const pet1 = petBuilder.pet("Petey", "bull terrier")
const pet2 = petBuilder.pet("Maggie", "great pyrenese")
const pet3 = petBuilder.pet("Rougarou", "german shepherd")


console.log(petBuilder.kennel())