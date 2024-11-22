export interface Integration {
    id:               number;
    integration_type: string;
    name:             string;
    tier:             string;
    tags:             Tags;
    Description:      string;
    Icon:             string;
    Availability:     string;
    SourceCode:       string;
    schema_ids:       string[];
}

export interface Tags {
    usage: string[];
}
