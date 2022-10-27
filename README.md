# Welcome to your CDK JavaScript project

This is a blank project for CDK development with JavaScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app. The build step is not required when using JavaScript.

## Useful commands

* `npm run test`         perform the jest unit tests
* `cdk deploy`           deploy this stack to your default AWS account/region
* `cdk diff`             compare deployed stack with current state
* `cdk synth`            emits the synthesized CloudFormation template

# AWS CDK

CDK = Cloud Development Kit 

AWS CDK is used to define and provision AWS cloud resources

`npm i -g serverless`: installer serverless
`serverless config credentials --provider aws --key KEY --secret SECRETKEY --profile serverless-admin`: définir un profile par defaut 
`--overwrite`: option à ajouter pour forcer la mise à jour du profil
`get-caller-identity`: Returns details about the IAM user or role whose credentials are used to call the operation.
`cdk init app --language javascript`: initialiser un projet CDK

`cdk bootstrap`: will create the resources, mainly an S3 bucket where all of the resources are going to be. Whatever we are created here (resources, code) it's going to be store for us.
`cdk synth`: synthesize the actual cloud formation that will be pushed onto the backend to create the structure with YAML file
`cdk deploy`: deploy the structure on our amazon account
