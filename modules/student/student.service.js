(function () {
    'use strict';

    module.exports = {
        createStudent,
        fetchStudents,
        fetchStudentById,
        updateStudent,
        deleteStudent,
        fetchCourse
    };

    var StudentModel = require('./student.module')().StudentModel;

    function createStudent(student) {
        return StudentModel.create(student);
    }

    function fetchStudents() {
        return StudentModel.find({})
            .exec();
    }

    function fetchStudentById(studentId) {
        return StudentModel.findById(studentId)
            .exec();
    }

    function updateStudent(studentId, student) {
        return StudentModel
            .findByIdAndUpdate(studentId, student, {new: true})
            .exec();
    }

    function deleteStudent(studentId) {
        return StudentModel
            .findByIdAndRemove(studentId)
            .exec();
    }

    function fetchCourse(courseAl,gradeAl) {
        return StudentModel.updateMany({"courses":{ "name": courseAl}}, {"$set": {"courses": {"grade":gradeAl}}})
        .exec() 
    }

})();