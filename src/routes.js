import React from "react";

import Lessons from './Components/Lessons/lessons'
import Lesson1 from './Components/Lessons/Lesson1'
import Lesson2 from './Components/Lessons/Lesson2'
import Lesson3 from './Components/Lessons/Lesson3'
import Lesson4 from './Components/Lessons/Lesson4'

import Anton from './Components/PersonalInfo/anton'
import Oleh from './Components/PersonalInfo/oleh'

const routes = [
    {
        path: "/oleh",
        component: Oleh
    },
    {
        path: "/anton",
        component: Anton
    },
    {
        path: "/lessons",
        component: Lessons,
        routes: [
            {
                path: "/lessons/lesson1",
                component: Lesson1
            },
            {
                path: "/lessons/lesson2",
                component: Lesson2
            },
            {
                path: "/lessons/lesson3",
                component: Lesson3
            }
            ,
            {
                path: "/lessons/lesson4",
                component: Lesson4
            }
        ]
    }
];

export default routes;

