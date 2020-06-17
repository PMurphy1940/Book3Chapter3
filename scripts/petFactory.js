const BowWowKennels = []
const petBuilder = {
    pet(petName, petBreed) {
        let petcard = {
            petName: petName,
            petBreed: petBreed
           }
           BowWowKennels.push(petcard)
           return petcard
    },
    kennel() {
        return BowWowKennels
    }
}

export default petBuilder