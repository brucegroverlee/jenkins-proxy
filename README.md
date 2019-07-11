Jenkins proxy
=============

```sh
gcloud config set project sherpon-development
```

```
gcloud functions deploy jenkins-proxy \
  --set-env-vars JENKINS_SERVER_URL=https://d61418ec.ngrok.io \
  --runtime nodejs8 \
  --trigger-http \
  --entry-point jenkinsProxy
```

webhook
```
https://us-central1-sherpon-development.cloudfunctions.net/jenkins-proxy/github-webhook
```
Events
- push
- commit comments

## Filter

```http
https://developer.github.com/webhooks/#payloads
https://developer.github.com/v3/activity/events/types/#pushevent
https://developer.github.com/v3/activity/events/types/#commitcommentevent
https://developer.github.com/v3/activity/events/types/#pullrequestevent
```

