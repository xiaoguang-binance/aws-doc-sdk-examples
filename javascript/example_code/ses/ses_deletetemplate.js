 
//snippet-sourcedescription:[ses_deletetemplate.js demonstrates how to delete an Amazon SES email template.]
//snippet-keyword:[JavaScript]
//snippet-keyword:[Code Sample]
//snippet-keyword:[Amazon Simple Email Service]
//snippet-service:[ses]
//snippet-sourcetype:[full-example]
//snippet-sourcedate:[2018-06-02]
//snippet-sourceauthor:[daviddeyo]


// Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// Licensed under the Apache-2.0 License on an "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND.   

// ABOUT THIS NODE.JS SAMPLE: This sample is part of the SDK for JavaScript Developer Guide topic at
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ses-examples-creating-template.html
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'REGION'});

// Create the promise and SES service object
var templatePromise = new AWS.SES({apiVersion: '2010-12-01'}).deleteTemplate({TemplateName: 'TEMPLATE_NAME'}).promise();

// Handle promise's fulfilled/rejected states
templatePromise.then(
  function(data) {
    console.log("Template Deleted");
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
