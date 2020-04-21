| Endpoints                        | Method | Param      | Description                   |
|---------------------------------|--------|------------|-------------------------------|
| /api/students                   | POST   | --         | Create a new student          |
| /api/students                   | GET    | --         | Get a list of students        |
| /api/students/id                | GET    | id         | Get a student by id           |
| /api/students/id                | PUT    | id         | Update a student by id        |
| /api/students/id                | DELETE | id         | Delete a student by id        |
| /api/student/average/courseName | GET    | courseName | Get average grade by students course |


# Example Post body
``` 
{
	"firstName": "John david",
	"lastName": "Gonzalez",
	"email": "email",
	"courses": [
        {
            "name":"Algoritmia5", 
            "grade":4
        },
        {
            "name":"Bases de datos", 
            "grade":4
        }
    ]
}
```