# simple-container

Simple express based containerized server which basically serves as an echo chamber

## Building and running

Make sure you have Docker intalled and running. You can check whether you have this by running `docker ps -a`. Once that command succeeds, run `docker build -t simple-container .` to build the container. Then run `docker run -d --name test-server -p 8080:8080 simple-container` to run the container in the background. If you want to run it in the foreground, replace the `-d` with a `-it` in the command above.

Now you should be able to talk to the container at port 8080.

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
