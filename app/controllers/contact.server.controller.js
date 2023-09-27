exports.render = function (req, res) {
    const firstName = req.body.firstName;
    const lastname = req.body.lastName;
    const contactNumber = req.body.contactNumber;
    const email = req.body.email;
    const message = req.body.message;

    // I can now process the form data as needed

    res.render('thankYou', {
        clientName: firstName,
        clientLastname: lastname
    });
};  