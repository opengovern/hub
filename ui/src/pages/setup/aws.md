# AWS Integration Setup Guide for opencomply

This guide provides step-by-step instructions to integrate your AWS accounts with opencomply using a CloudFormation stack. This integration enables effective management and visibility of your AWS resources within opencomply.

## Table of Contents

- [AWS Integration Setup Guide for opencomply](#aws-integration-setup-guide-for-opencomply)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Steps](#steps)
    - [1. Clone the Automation Repository](#1-clone-the-automation-repository)
    - [2. Deploy the CloudFormation Stack](#2-deploy-the-cloudformation-stack)
    - [3. Monitor Stack Deployment](#3-monitor-stack-deployment)
    - [4. Generate IAM Access Keys for opencomplyIAMUser](#4-generate-iam-access-keys-for-opencomplyiamuser)
    - [5. Add AWS Account to opencomply Dashboard](#5-add-aws-account-to-opencomply-dashboard)
      - [Navigate to the opencomply Dashboard](#navigate-to-the-opencomply-dashboard)
      - [Access the Integrations Section](#access-the-integrations-section)
      - [Enter AWS Account Details](#enter-aws-account-details)

## Prerequisites

Before you begin, ensure you have the following:

- **AWS CLI Installed and Configured**: The AWS CLI must be installed on your machine and configured with administrative privileges. You can [install the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) and [configure it](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) if you haven't already.
- **Git Installed**: Ensure Git is installed on your machine. You can download it from [here](https://git-scm.com/downloads).

## Steps

Follow the steps below to set up the AWS integration with opencomply.

### 1. Clone the Automation Repository

Begin by cloning the opencomply integration automation repository and navigating to the AWS accounts directory.

```bash
git clone https://github.com/opengovern/automation.git
cd integration-automation/aws-accounts
```

### 2. Deploy the CloudFormation Stack

Deploy the CloudFormation stack to set up the necessary resources within your AWS organization.

Retrieve the Root ID of Your AWS Organization

```bash
ROOT_ID=$(aws organizations list-roots --output text --query='Roots[0].Id' --no-cli-pager)
```

Create the CloudFormation Stack

Execute the following command to create the stack. This command uses the AWSOrganizationDeployment.yml template and passes the retrieved Root ID as a parameter.

```bash
aws cloudformation create-stack \
  --stack-name opencomply-Deploy \
  --template-body file://./AWSOrganizationDeployment.yml \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameters ParameterKey=OrganizationUnitList,ParameterValue=$ROOT_ID
```

### 3. Monitor Stack Deployment

Monitor the status of your CloudFormation stack to ensure it deploys successfully.

```bash
aws cloudformation describe-stacks \
  --stack-name opencomply-Deploy \
  --query "Stacks[0].StackStatus" \
  --output text
```

Wait until the stack status returns CREATE_COMPLETE.

### 4. Generate IAM Access Keys for opencomplyIAMUser

After the stack is successfully created, generate IAM access keys for the opencomply IAM user.

Retrieve the IAM Username from Stack Outputs

```bash
IAM_USER=$(aws cloudformation describe-stacks \
  --stack-name opencomply-Deploy \
  --query "Stacks[0].Outputs[?OutputKey=='IAMUserNameInMasterAccount'].OutputValue" \
  --output text)
```

Create Access Keys for the IAM User

```bash
aws iam create-access-key --user-name $IAM_USER
```

**Important**: Store the AccessKeyId and SecretAccessKey securely. You will need these credentials to complete the integration.

### 5. Add AWS Account to opencomply Dashboard

With the IAM access keys generated, proceed to add your AWS account to the opencomply dashboard.

#### Navigate to the opencomply Dashboard

Open your web browser and go to the opencomply dashboard.

#### Access the Integrations Section

- Go to Integrations in the sidebar.
- Select AWS from the list of available integrations.
- Click on Add AWS Account.

#### Enter AWS Account Details

In the integration wizard, provide the following details:

- **AccessKeyID**: Enter the AccessKeyId obtained from Step 4.
- **SecretAccessKey**: Enter the SecretAccessKey obtained from Step 4.
- **IAM Role Name**: Enter opencomplyReadOnly.
  