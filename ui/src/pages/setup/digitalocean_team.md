# DigitalOcean Integration Setup Guide for Opencomply

This guide provides concise instructions to integrate your DigitalOcean account with Opencomply using a Read Only Personal Access Token.

## Steps

### 1. Generate a Read Only Personal Access Token in DigitalOcean

#### Log In

- Sign in to your DigitalOcean account at [cloud.digitalocean.com/login](https://cloud.digitalocean.com/login).

#### Navigate to API

- Click **API** in the left menu, then under **Personal access tokens**, click **Generate New Token**.

#### Configure Token

- **Name**: Enter a descriptive name like **Opencomply ReadOnly Token**.
- **Expiration**: Choose an appropriate expiration date.
- **Scopes**: Select **Read Only** to grant read access to all resources.

#### Generate and Save Token

- Click **Generate Token** and copy the token; it won't be shown again.

### 2. Configure Opencomply with the Token

#### Access Opencomply

- Log in to the Opencomply portal with your admin credentials.

#### Add Integration

- Navigate to **Integrations**, select **DigitalOcean**, and click **Add New Integration**.

#### Enter API Token

- Paste the Personal Access Token you generated.

#### Complete Integration

- Click **Next**, review the details, and then **Confirm** to establish the connection.

With these steps, you have successfully integrated your DigitalOcean account with Opencomply, enabling read-only access to enhance visibility and compliance capabilities within the platform.