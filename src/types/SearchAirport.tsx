export interface IAirport{
    status: boolean;
    timestamp: number;
    data: IData[];
}

export interface IData{
    presentation: IPresentation;
    navigation:INavigation;
}

export interface IPresentation{
    title: string;
    suggestionTitle: string;
    subtitle: string;
}

export interface INavigation{
    entityId: string;
    entityType: string;
    localizedName: string;
}