Jenkins proxy
=============

```sh
gcloud config set project sherpon-development
```

```
gcloud functions deploy getAuthorization \
  --set-env-vars JENKINS_SERVER_URL=https://d61418ec.ngrok.io \
  --runtime nodejs8 \
  --trigger-http
```