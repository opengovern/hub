# Azure Subscriptions Integration Setup Guide for Opencomply

This guide provides step-by-step instructions to integrate your Azure subscriptions with Opencomply by creating a Service Principal with read-only access. This integration enables Opencomply to provide visibility and governance capabilities over your Azure resources.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Steps](#steps)
  - [1. Clone the Integration Scripts Repository](#1-clone-the-integration-scripts-repository)
  - [2. Run the Reader Role Assignment Script](#2-run-the-reader-role-assignment-script)
  - [3. Setup Opencomply](#3-setup-opencomply)
- [Conclusion](#conclusion)

## Prerequisites

Before you begin, ensure the following prerequisites are met:

- **Azure CLI Installed and Authenticated**: The Azure CLI must be installed on your machine and authenticated with sufficient privileges.
  - **Install Azure CLI**: Follow the [Azure CLI Installation Guide](https://learn.microsoft.com/cli/azure/install-azure-cli) to install the Azure CLI.
  - **Authenticate**: Run the following command and follow the prompts to authenticate:

    ```bash
    az login
    ```

- **Opencomply Installed and Running**: Ensure that Opencomply is installed and operational. Refer to the [Opencomply Installation Documentation](https://github.com/opengovern/integration-automation-scripts) if needed.

## Steps

Follow the steps below to set up the Azure subscriptions integration with Opencomply.

### 1. Clone the Integration Scripts Repository

The integration scripts automate the creation of the Service Principal (SPN) and role assignment.

```bash
# Clone the repository
git clone https://github.com/opengovern/integration-automation-scripts.git
# Navigate to the Azure directory
cd integration-automation-scripts/azure-subscriptions
```

### 2. Run the Reader Role Assignment Script

Execute the script to create a Service Principal (SPN) and assign it the Reader role across all your Azure subscriptions.

- Make the Script Executable (if not already):

  ```bash
  chmod +x assign_reader_role.sh
  ```

- Run the Script:

  ```bash
  ./assign_reader_role.sh
  ```

The script will perform the following actions:

- Create a Service Principal with the necessary permissions.
- Assign the Reader role to the Service Principal for each Azure subscription in your tenant.

**Note**: Ensure you have the necessary permissions to create Service Principals and assign roles in your Azure tenant.

### 3. Setup Opencomply

After running the script, it will output essential details required for configuring Opencomply:

- Tenant ID
- Application (Client) ID
- Object ID
- Client Secret

Use the credentials obtained to configure Azure integration within Opencomply.

#### Navigate to the Opencomply Dashboard:

Open your web browser and go to the Opencomply portal. Log in with your administrator credentials.

#### Access the Integrations Section:

- In the sidebar, click on Integrations.
- Select Azure from the list of available integrations.
- Click on Add New Integration and choose New SPN from the options.

#### Enter the Required Details:

In the integration wizard, provide the following details:

- **Tenant ID**: Enter the Tenant ID obtained from the script output.
- **Application (Client) ID**: Enter the Application (Client) ID.
- **Client Secret**: Enter the Client Secret. Ensure this is stored securely.
- **Object ID**: Enter the Object ID associated with the Service Principal.

#### Complete the Integration:

Follow the on-screen instructions to complete the integration process. Once completed, your Azure subscriptions will be linked with Opencomply, providing enhanced visibility and governance over your Azure resources.