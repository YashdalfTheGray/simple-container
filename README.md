# simple-container

Simple express based containerized server which basically serves as an echo chamber

## API

### `/`

Returns a 200 with a the JSON blob below.

```json
{
  "server": "echo-chamber",
  "status": "ok",
  "method": "<request_method>",
  "message": "GET /get to echo back query params and POST to /post to echo back request body."
}
```

### `/get?param1=foo&param2=bar`

Returns a 200 with the query parameters passed back to the user.

```json
{
  "server": "echo-chamber",
  "status": "ok",
  "method": "GET",
  "queryParams": { "param1": "foo", "param2": "bar" }
}
```

### `/post`

Returns a 200 with the body of the POST request.

```json
{
  "server": "echo-chamber",
  "status": "ok",
  "method": "POST",
  "requestBody": { "param1": "foo" }
}
```

### `/env`

Returns a 200 with a certain environment variables if they are configured.

```json
{
  "server": "echo-chamber",
  "status": "ok",
  "method": "GET",
  "env": {
    "TEST_VAR": "test_var_value",
    "ANOTHER_TEST_VAR": "another_test_var_value"
  }
}
```
