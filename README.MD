
#### Database Connection

Basic jobs api with crud and jwt authentication

- Validation Errors
- Duplicate (Email)
- Cast Error

#### Security 

- helmet
- cors
- xss-clean
- express-rate-limit

Swagger UI

```yaml
/jobs/{id}:
  parameters:
    - in: path
      name: id
      schema:
        type: string
      required: true
      description: the job id
```
