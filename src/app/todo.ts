export interface ITodo {
    id?: number;
    name: String,
    date?: String,
    badges?: string[],
    isCompleted: boolean,
}

export let todos: ITodo[]=[
    {
        "id": 1,
        "name": "Call John to confirm lunch appointment at noon.",
        "isCompleted": false,
        "date": "Tomorrow",
        "badges": ["work"]
    },
    {
        "id": 2,
        "name": "Buy groceries for the week.",
        "isCompleted": false,
        "date": "Monday",
        "badges": ["personal"]
    },
    {
        "id": 3,
        "name": "Finish reading chapter 5 of \"The Great Gatsby.\"",
        "isCompleted": false,
        "date": "Today",
        "badges": ["personal"]
    },
    {
        "id": 4,
        "name": "Attend yoga class at 6 PM.",
        "isCompleted": false,
        "date": "Tuesday",
        "badges": ["personal"]
    },
    {
        "id": 5,
        "name": "Write a report on the new project proposal.",
        "isCompleted": false,
        "date": "Wednesday",
        "badges": ["work"]
    },
    {
        "id": 6,
        "name": "Schedule a dentist appointment for next month.",
        "isCompleted": false,
        "date": "March 10",
        "badges": ["personal"]
    },
    {
        "id": 7,
        "name": "Pay electricity bill before the due date.",
        "isCompleted": false,
        "date": "Today",
        "badges": ["personal", "bills"]
    },
    {
        "id": 8,
        "name": "Organize closet and donate clothes to charity.",
        "isCompleted": false,
        "date": "Thursday",
        "badges": ["personal"]
    },
    {
        "id": 9,
        "name": "Research new vacation destinations for the summer.",
        "isCompleted": false,
        "date": "March 31",
        "badges": ["personal"]
    },
    {
        "id": 10,
        "name": "Prepare presentation for team meeting on Friday.",
        "isCompleted": false,
        "date": "Friday",
        "badges": ["work"]
    }
]