// doctors lightning
import doctorsBuilder from "./doctorFactory.js"
import petBuilder from "./petFactory.js"
import createArtist from "./dreamCrusher.js"
const doctor1 = doctorsBuilder.doctor("Paulson", "Cardiologist", "malpractice jail")
console.log(doctor1)

// Pet lightning
const pet1 = petBuilder.pet("Petey", "bull terrier")
const pet2 = petBuilder.pet("Maggie", "great pyrenese")
const pet3 = petBuilder.pet("Rougarou", "german shepherd")
console.log(petBuilder.kennel())

// Music Row

createArtist.country("Bruce Atikins", 23)
createArtist.pop("Jensen Brown", 20)
createArtist.funk("Dre Funkz", 25)
createArtist.rap("Dusta Grimes", 21)
createArtist.bluegrass("Bartholomew Danielson", 23)
createArtist.country("Avilee Dallas", 19)
createArtist.pop("Austin Kinkaid", 22)
createArtist.rap("Loyoncé Branis", 27)

console.log(createArtist.showLabelRoster())