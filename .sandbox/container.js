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
  }, {
    "id": "RL1570135113097",
    "events": [{
      "modulePath": "marketo-forms/src/lib/events/formSubmitSuccess.js",
      "settings": {}
    }],
    "name": "form submit success"
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
    "turbineBuildDate": "2019-10-03T20:38:38.082Z",
    "buildDate": "2019-10-03T20:38:38.082Z",
    "environment": "development"
  }
}