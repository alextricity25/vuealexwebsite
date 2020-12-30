//const { CLIENT_ID, ISSUER, OKTA_TESTING_DISABLEHTTPSCHECK } = process.env
const { INSTAGRAM_APIKEY } = process.env

exports.data = {
  creds: {
    instagramApiKey: INSTAGRAM_APIKEY
  }
}
