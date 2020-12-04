# Basic-CRUD-in-Nodejs


### Installation

```bash
npm install
```

### Usage

```
## API 
http://localhost:3000/
### Get Users
| Method  | Enpoint |
| ------------- | ------------- |
| GET | `users` | name, email | 


### Outputs

[
    {
        "id": 1,
        "name": "Joe",
        "email": "Joe@ibm.com"
    },
    {
        "id": 3,
        "name": "Michael",
        "email": "michael@google.com"
    },
    {
        "id": 2,
        "name": "Ray",
        "email": "raySanchez@google.com"
    }
]


### Add Users
| Method  | Enpoint | Params |  |
| ------------- | ------------- | ------------- |
| POST | `users` | name, email | 

{
    "name":"Ray",
    "email": "raySanchez@google.com"
}


### Outputs

{
    "message": "User Added Succesfully",
    "body": {
        "user": {
            "name": "Mac",
            "email": "macR_33@google.com"
        }
    }
}


### Get Users by Id
| Method  | Enpoint | Params |  |
| ------------- | ------------- | ------------- |
| GET | `users/:id` | id | 


### Outputs

[
    {
        "id": 3,
        "name": "Michael",
        "email": "michael@google.com"
    }
]

### Delete Users
| Method  | Enpoint | Params |  |
| ------------- | ------------- | ------------- |
| DELETE | `users/:id` | id | 


### Outputs

"User ID Deleted Succesfully"

### Update Users
| Method  | Enpoint | Params |  |
| ------------- | ------------- | ------------- |
| UPDATE | `users/:id` | id, name, email | 


### Outputs

"User Updated Succesfully"


### Database in Postgres
### Tabla User
                                  Table "public.users"
 Column |         Type          | Collation | Nullable |              Default              
--------+-----------------------+-----------+----------+-----------------------------------
 id     | integer               |           | not null | nextval('users_id_seq'::regclass)
 name   | character varying(40) |           |          | 
 email  | text                  |           |          | 
Indexes:
    "users_pkey" PRIMARY KEY, btree (id)
