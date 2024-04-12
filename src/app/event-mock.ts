import { IEvent } from "./event";

export const EVENTS: IEvent[] = [
    {
        id: 1,
        text: "Hit the gym",
        classes: [],
        date: new Date("2023-04-01")
    },
    {
        id: 2,
        text: "Pay bills",
        classes: ["done", "important"],
        date: new Date("2023-03-29")
    },
    {
        id: 3,
        text: "Meet John",
        classes: [],
        date: null
    },
    {
        id: 4,
        text: "Buy eggs",
        classes: ["important"],
        date: new Date("2023-03-29")
    },
    {
        id: 5,
        text: "Read a book",
        classes: ["done"],
        date: null
    },
    {
        id: 6,
        text: "Organize office",
        classes: [],
        date: null
    },
    {
        id: 7,
        text: "Eat dinner",
        classes: [],
        date: null
    },
    {
        id: 8,
        text: "Buy apples",
        classes: ["important"],
        date: new Date("2023-03-05")
    },
    {
        id: 9,
        text: "Meet George",
        classes: ["important"],
        date: null
    },
    {
        id: 10,
        text: "Feed the cat",
        classes: [],
        date: null
    },
    {
        id: 11,
        text: "Write a letter",
        classes: ["done"],
        date: null
    },
    {
        id: 12,
        text: "Run 1 km",
        classes: [],
        date: new Date("2022-01-15")
    }
];
