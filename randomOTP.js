function generateOTP() {
    let otp = " "

    otp = Math.floor(Math.random() * 10000)
    console.log(otp);
}

generateOTP()