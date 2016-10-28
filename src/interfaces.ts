interface IRangeValue {
    value: Date | string | number | boolean,
    valueLabel: string,
    key: string
}

interface IRowObject {
    index: number,
    identity: powerbi.DataViewScopeIdentity,
    facet?: Date | string | number | boolean,
    facetInstance?: Date | string | number | boolean,
    count?: Date | string | number | boolean,
    facetInstanceColor?: Date | string | number | boolean,
    iconClass?: Date | string | number | boolean,
    rangeValues?: IRangeValue[],
}

interface IDataPoint {
    rows: IRowObject[],
    highlight: number,
    facetKey: string,
    facetLabel: string,
    instanceValue: string,
    instanceLabel: string,
    instanceCount: number,
    instanceCountFormatter: any,
    instanceColor: string,
    instanceIconClass: string,
    rangeValues?: IRangeValue[],
    isSelected?: boolean,
}