export interface TypeTables {
  count_of_named_tables: number;
  count_of_named_columns: number;
  tables: Table[];
  description: string;
}

export interface Table {
    table_name:       string;
    description:      string;
    count_of_columns: number;
}

export interface TableDefinition {
    table_name:        string;
    table_description: string;
    columns:           Column[];
}

export interface Column {
    name:        string;
    type:        string;
    description: string;
}
