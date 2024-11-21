export interface Benchmarks {
    id:               string;
    title:            string;
    integration_type: string[];
    description:      string;
    control_count:    number;
    number_of_tables: number;
    created_at:       string;
    updated_at:       string;
}
