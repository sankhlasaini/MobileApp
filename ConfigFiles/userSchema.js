/*
 * Add/modify profile schema values
 */
var profileDataModel = function(profileObj) {
    var profileDetails = {
        username: profileObj.username,
        createdOn: Date.now(),
        updatedOn: Date.now(),
        profilePic: profileObj.profilePic,
        personalInfo: {
            // fname: profileObj.personalInfo.fname,
            // lname: profileObj.personalInfo.lname,
            gender: profileObj.personalInfo.gender,
            email: profileObj.personalInfo.email,
            dob: profileObj.personalInfo.dob,
            contact: profileObj.personalInfo.contact,
        }
    };
    return profileDetails;
};


module.exports = {
    profileDataModel: profileDataModel,
};