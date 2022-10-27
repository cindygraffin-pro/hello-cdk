import { CfnOutput, Stack, aws_iam, aws_dynamodb } from 'aws-cdk-lib';
import { Construct } from 'constructs'; 
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import path, {join} from 'path'
import {fileURLToPath} from 'url';
import { aws_cloudwatch } from 'aws-cdk-lib';


const __filename = fileURLToPath(import.meta.url);


class HelloCdkStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const handlerHello = new Function(this, 'Hello-lambda', {
      // runtime: Runtime.NODEJS_16_X,
      runtime: Runtime.PYTHON_3_9,
      memorySize: 512,
      // handler: 'list-buckets.main',
      handler: 'list-lambdas.main',
      code: Code.fromAsset(join(path.dirname(__filename), '../lambdas')),
      environment: {
        NAME: 'Cindy',
        AGE: '26'
      }
    })

    const listBucketPolicy = new aws_iam.PolicyStatement({
      effect: aws_iam.Effect.ALLOW,
      actions: ['s3:*'],
      resources: ['*']
    })

    const listLambdasPolicy = new aws_iam.PolicyStatement({
      effect: aws_iam.Effect.ALLOW,
      actions: ['lambda:*'],
      resources: ['*']
    })

    handlerHello.role.attachInlinePolicy(
      new aws_iam.Policy(this, 'list-resources', {
        statements: [listBucketPolicy, listLambdasPolicy]
      })
    )

    new CfnOutput(this, 'function-arn', {
      value: handlerHello.functionArn
    })

    const testTable = new aws_dynamodb.Table(this, 'TestTable', {
      partitionKey: { name: 'id', type: aws_dynamodb.AttributeType.STRING}
    })
  }
}

export {HelloCdkStack};

