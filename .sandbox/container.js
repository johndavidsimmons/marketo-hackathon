module.exports = {
  "dataElements": {},
  "rules": [{
    "id": "RL1570126703649",
    "name": " form render rule",
    "events": [{
      "modulePath": "marketo-forms/src/lib/events/formRendered.js",
      "settings": {}
    }]
  }, {
    "id": "RL1570126759648",
    "name": "form error rule",
    "events": [{
      "modulePath": "marketo-forms/src/lib/events/formError.js",
      "settings": {}
    }]
  }, {
    "id": "RL1570127358504",
    "name": "form submit",
    "events": [{
      "modulePath": "marketo-forms/src/lib/events/formSubmitClick.js",
      "settings": {}
    }]
  }],
  "extensions": {},
  "property": {
    "settings": {
      "domains": ["example.com"]
    }
  },
  "company": {
    "orgId": "ABCDEFGHIJKLMNOPQRSTUVWX@AdobeOrg"
  },
  "buildInfo": {
    "turbineVersion": "25.6.0",
    "turbineBuildDate": "2019-10-03T18:29:22.680Z",
    "buildDate": "2019-10-03T18:29:22.680Z",
    "environment": "development"
  }
}