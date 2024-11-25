import { ReactComponent as AWSSVG } from "../../images/integration-logos/aws.svg";
import { ReactComponent as AZURESVG } from "../../images/integration-logos/azure.svg";
import { ReactComponent as ENTRASVG } from "../../images/integration-logos/entraid.svg";
import { ReactComponent as CLOUDSVG } from "../../images/integration-logos/cloudflare.svg";
import { ReactComponent as DIGITALSVG } from "../../images/integration-logos/DigitalOcean_logo.svg";
import { ReactComponent as GITUBSVG } from "../../images/integration-logos/github.svg";
import { ReactComponent as OPENCOMPLYSVG } from "../../images/integration-logos/opencomply.svg";
import { ReactComponent as OPENAISVG } from "../../images/integration-logos/openai.svg";


type IconProps = React.HTMLAttributes<SVGElement>

export const Logos = {
  AWS: (props: IconProps) => (
    <AWSSVG {...props}/>
  ),
  Azure: (props: IconProps) => (
   <AZURESVG {...props}/>
  ),
  EntraID: (props: IconProps) => (
    <ENTRASVG {...props}/>
  ),
  CloudFlare: (props: IconProps) => (
    <CLOUDSVG {...props}/>
  ),
  DigitalOcean: (props: IconProps) => (
    <DIGITALSVG {...props}/>
  ),
  Github: (props: IconProps) => (
    <GITUBSVG {...props}/>
  ),
  OpenConply: (props: IconProps) => (
    <OPENCOMPLYSVG {...props}
    />
  ),
  OpenAi: (props: IconProps) => (
    <OPENAISVG {...props}
    />
  ),
};
