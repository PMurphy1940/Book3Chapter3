const doctorsBuilder = {
    doctor(doctorName, speciality, practiceAddress)  {
       let doctorCard = {
            "doctorName": doctorName,
            "speciality": speciality,
            "practiceAddress": practiceAddress}

        return doctorCard
    }
    
}

export default doctorsBuilder