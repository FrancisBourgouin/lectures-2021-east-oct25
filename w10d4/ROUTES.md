# Interview Interface

## Interviewers

- GET /api/interviewers

```jsx
  [{
    id: String                    // id of the interviewer
    name: String                  // name of the interviewer
    description: String           // description of the interviewer
    email: String                 // email address of the interviewer
  }]
```

- POST /api/interviewers
- GET /api/interviewers/:interviewer_id

```jsx
{
  id: String; // id of the interviewer
  name: String; // name of the interviewer
  description: String; // description of the interviewer
  email: String; // email address of the interviewer
}
```

- PUT /api/interviewers/:interviewer_id
- DELETE /api/interviewers/:interviewer_id

## Candidates

- GET /api/candidates
- POST /api/candidates
- GET /api/candidates/:candidate_id
- PUT /api/candidates/:candidate_id
- DELETE /api/candidates/:candidate_id

## App View (Frontend Routes)

- /
- /login
- /register
- /dashboard
