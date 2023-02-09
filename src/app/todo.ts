export interface ITodo {
    name: String,
    date?: String,
    badges?: string[],
    isCompleted: boolean,
}

export let todos: ITodo[]=[
    {
        name: 'Learn React',
        date: '2020-01-01',
        badges: ['work', 'personal'],
        isCompleted: false,
    },
    {
        name: 'Learn Redux',
        date: '2020-01-01',
        badges: ['work'],
        isCompleted: false,
    },
    {
        name: 'Learn Node',
        date: '2020-01-01',
        badges: ['personal'],
        isCompleted: false,
    },
]