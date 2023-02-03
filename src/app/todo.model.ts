import { ITodo } from "./todo";

export class Todo implements ITodo{
    public name: string;
    public date: string;
    public badges: [];
    public isCompleted: boolean;

    constructor(name: string){
        this.name = name;
        this.date = "";
        this.badges = [];
        this.isCompleted = false;
    }
}