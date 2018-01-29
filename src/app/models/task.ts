//tworzymy obiekt task ktory jest eksportowany i mozemy go zaimportowac gdzies
export interface Task {
    _id?: {$oid: string}
    name: string;
    created: string;
    end?: string;
    isDone: boolean;
}