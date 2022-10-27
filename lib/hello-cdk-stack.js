import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs'; 
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import path, {join} from 'path'
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);


class HelloCdkStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const handler = new Function(this, 'Hello-lambda', {
      runtime: Runtime.NODEJS_16_X,
      memorySize: 512,
      handler: 'app.handler',
      code: Code.fromAsset(join(path.dirname(__filename), '../lambdas'))
    })
  }
}

export {HelloCdkStack};

