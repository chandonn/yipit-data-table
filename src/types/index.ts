export type DataCellInfo = {
  value: number;
  unit: string;
  period: string;
};

export type DataCell = {
  main: DataCellInfo;
  secondary: DataCellInfo;
};

export type DataRow = {
  name: string;
  type: string;
  lastUpdatedAt: number;
  trailingGrowth: DataCell;
  quarterToDate: DataCell;
  quarterToDateValueComparison?: DataCell;
};

export type Data = DataRow[];

export type AppState = {
  data: Data;
  actions: {
    loadData: () => void;
  };
};

export enum DataTableHead {
  name = "Metric",
  lastUpdatedAt = "Last Update",
  trailingGrowth = "Trailing Growth Est.",
  quarterToDate = "QTD Est.",
  quarterToDateValueComparison = "QTD vs VA Cons.",
}
