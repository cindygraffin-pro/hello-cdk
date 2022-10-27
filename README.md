# Welcome to your CDK JavaScript project

This is a blank project for CDK development with JavaScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app. The build step is not required when using JavaScript.

## Useful commands

* `npm run test`         perform the jest unit tests
* `cdk deploy`           deploy this stack to your default AWS account/region
* `cdk diff`             
* `cdk synth`            emits the synthesized CloudFormation template

# AWS CDK

CDK = Cloud Development Kit 

AWS CDK is used to define and provision AWS cloud resources

`npm i -g serverless`: installer serverless  
`serverless config credentials --provider aws --key KEY --secret SECRETKEY --profile serverless-admin`: définir un profile par defaut   
`--overwrite`: option à ajouter pour forcer la mise à jour du profil  
`aws sts get-caller-identity`: Returns details about the IAM user or role whose credentials are used to call the operation.  
`cdk init app --language javascript`: initialiser un projet CDK  

`cdk bootstrap`: will create the resources, mainly an S3 bucket where all of the resources are going to be. Whatever we are created here (resources, code) it's going to be store for us.  
`cdk synth`: synthesize the actual cloud formation that will be pushed onto the backend to create the structure with YAML file  
`cdk synth > template.yaml`: create a template YAML file with synthetized template or our CF
`cdk deploy`: deploy the structure on our amazon account  
`cdk deploy --hotswap`: just deploy what have changed
`cdk diff`: compare deployed stack with current state

-> CDK CLI allow to synthesize the code into a cloud formation template (it executes the source code). Then it's deployed to AWS CloudFormation. 

Levels of Constructs:
- L0: we don't use it, represents a basic CF resource, an empty shell that oesn't have a type, like 'AWS::SNS::Topic' (all other constructs inherit from this)
- L1 construct: represent CloudFormation Resource
- L2 construct: writter by the AWS CDK team, make it easier to create AWS resources & perform operations: helper functions
- L3 construct: combinatiion of L1 and L2

App Construct:
- The root (doesn't need a scope or parent upon creation)
- doesn't represent a CF resource directly
- used to group together stacks

AWS Construct Library:
- contains all constructs that represent AWS resources
- documentation -> [Lien de la doc](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-construct-library.html) 
