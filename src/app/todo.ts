export interface ITodo {
    name: String,
    date?: String,
    badges?: string[],
    isCompleted: boolean,
}

export let todos: ITodo[]=[
    {
        name: 'Learn React',
        date: 'Tomorrow',
        badges: ['work', 'personal'],
        isCompleted: false,
    },
    {
        name: 'Learn Redux',
        date: 'Friday',
        badges: ['work'],
        isCompleted: false,
    },
    {
        name: 'Learn Node',
        date: 'Today',
        badges: ['personal'],
        isCompleted: false,
    },
]