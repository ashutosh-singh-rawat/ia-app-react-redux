import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import WizardFormPage from './components/form_wizard/WizardFormPage'; //eslint-disable-line import/no-named-as-default
import InitialAssessmentPage from './components/initial_assesment/InitialAssessmentPage'; //eslint-disable-line import/no-named-as-default

const RoutingConfig = () => (
  <div>
    <Route exact path="/" component={HomePage}/>
    <Route path="/courses" component={CoursesPage}/>
    <Route exact path="/course/:id" component={ManageCoursePage}/>
    <Route exact path="/course" component={ManageCoursePage}/>
    <Route exact path="/wizard-form" component={WizardFormPage}/>
    <Route path="/about" component={AboutPage}/>
    <Route path="/initial_assesment" component={InitialAssessmentPage}/>
  </div>
);

// export default (
//   <Route path="/" component={App}>
//     <IndexRoute component={HomePage} />
//     <Route path="about" component={AboutPage} />
//   </Route>
// );
// const RoutingConfig = (
//
//   <Router>
//     <div>
//       <Route exact path="/" component={HomePage}/>
//       <Route path="/about" component={AboutPage}/>
//     </div>
//   </Router>
// );

// const routes = {
//     path: '/',
//     component: App,
//     childRoutes: [
//         { path: '/about', component: AboutPage }
//         // ,
//         // {
//         //   path: '/posts',
//         //   component: Posts,
//         //   childRoutes: [ { path: '/post/:nr', component: Post } ]
//         // },
//         // { path: '*', component: NoMatch}
//     ]
// };
// export default RoutingConfig;


export default RoutingConfig;
