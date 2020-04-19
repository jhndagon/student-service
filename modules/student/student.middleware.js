(function () {
    'use strict';

    module.exports = {
        addStudent,
        getStudents ,
        getStudentById,
        modifyStudent,
        removeStudent,
        getStudentsAveragedByCourseName
    };

    var StudentService = require('./student.module')().StudentService;

    function addStudent(req, res, next) {

        StudentService.createStudent(req.body)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(error) {
            next(error);
        }

    }

    function getStudents(req, res, next) {

        StudentService.fetchStudents()
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function getStudentsAveragedByCourseName(req, res, next) {
        StudentService.fetchStudents()
            .then(success)
            .catch(failure);

            function success(data) {
                if(data.length != 0){
                    var suma  = 0;
                    for(var i = 0; i < data.length; i++) {
                        var courses = data[i].courses;
                        for(var j = 0; j < courses.length; j++) {
                            if(courses[j].name == req.params.courseName){
                                suma = courses[j].grade;
                            }
                        }
                    }
                    suma = suma / data.length;
                    req.response = suma;
                }
                next();
            }
    
            function failure(err) {
                next(err);
            }
    }

    function getStudentById(req, res, next) {

        StudentService.fetchStudentById(req.params.studentId)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function modifyStudent(req, res, next) {
        StudentService.updateStudent(req.params.studentId, req.body)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }
    }

    function removeStudent(req, res, next) {

        StudentService.deleteStudent(req.params.studentId)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }

    }

})();
