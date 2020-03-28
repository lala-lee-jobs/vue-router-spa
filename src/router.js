import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import About from './About';
import Booking from './Booking';
import Courses from './Courses';
import CourseList from './CourseList';
import CourseDetail from './CourseDetail';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: App,
            children: [
                { path: 'about', component: About },
                { path: 'booking', component: Booking },
                { 
                    path: 'courses',
                    component: Courses,
                    children: [
                        { path:'', component: CourseList},
                        { path:':id', component: CourseDetail}
                    ]
                },
            ]
        }
    ],
});