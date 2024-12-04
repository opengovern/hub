# Linode Integration Setup Guide for Opencomply

This guide provides instructions to integrate your Linode account with Opencomply by creating a personal access token for API authorization.

## Steps

### 1. Create a Personal Access Token in Linode

#### Log In

- Sign in to the Linode Cloud Manager.

#### Access API Tokens

- Click your username at the top of the screen and select **API Tokens**.

#### Create a Personal Access Token

- Click **Create a Personal Access Token**.

#### Configure the Token

- **Label**: Enter a label for the token to identify its intended use, like **Opencomply Integration**.
- **Expiry**: Select an appropriate expiration time for the token.
- **Permissions**:
  - For each product or service, select **ReadOnly** access.
  - For VPCs, select **Read/Write** (as Linode does not offer Read-Only access for VPCs).

#### Generate and Save Token

- After configuration, ensure the token is saved securely as it will only be displayed once.

### 2. Configure Opencomply with the Token

#### Access Opencomply

- Log in to the Opencomply portal using your admin credentials.

#### Add Integration

- Navigate to **Integrations**, select **Linode**, and click **Add New Integration**.

#### Enter API Token

- Paste the personal access token you generated from Linode.

#### Complete Integration

- Click **Next**, review the integration details, and then **Confirm** to establish the connection.

By following these steps, you have successfully integrated your Linode account with Opencomply, allowing read access and necessary write permissions for VPCs to enhance governance and compliance within the platform.
```