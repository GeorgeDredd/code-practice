var _this = this;
var countries = [
    {
        name: 'Nigeria',
        continent: 'Africa',
    },
];
var friuts = [8];
var age = 30;
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
})(Gender || (Gender = {}));
var personDetails = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () { return "".concat(_this.firstName, " ").concat(_this.lastName); },
    gender: Gender.Male,
};
var greetingMessage = 'Hello from typescript';
