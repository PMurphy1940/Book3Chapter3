let jumpStopRecords = []
let chattenRecords = []
let polarRecords = []

const createArtist = {
    country(name, age) {
        let countryArtist = {
            genre: "Country",
            artistName: name,
            artistAge: age,
            labelName: "Chatten Records"
        }
        chattenRecords.push(countryArtist)
    },
    bluegrass(name, age) {
        let bluegrassArtist = {
            genre: "Bluegrass",
            artistName: name,
            artistAge: age,
            labelName: "Chatten Records"
        }
        chattenRecords.push(bluegrassArtist)
    },
    funk(name, age) {
        let funkArtist = {
            genre: "Funk",
            artistName: name,
            artistAge: age,
            labelName: "JumpStop Records"
        }
        jumpStopRecords.push(funkArtist)
    },
    rap(name, age) {
        let rapArtist = {
            genre: "Rap",
            artistName: name,
            artistAge: age,
            labelName: "JumpStop Records"
        }
        jumpStopRecords.push(rapArtist)
    },
    pop(name, age) {
        let popArtist = {
            genre: "Pop",
            artistName: name,
            artistAge: age,
            labelName: "Polar Records"
        }
        polarRecords.push(popArtist)
    },
    showLabelRoster() {
        const fullRoster = {
            JumpStop: jumpStopRecords,
            Chatten: chattenRecords,
            Polar: polarRecords
        }
        return fullRoster
    }
}
export default createArtist