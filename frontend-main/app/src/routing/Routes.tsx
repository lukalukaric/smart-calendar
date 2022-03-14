import { Routes as RoutesComponent, Route } from 'react-router-dom';
import {
  LandingPage, AboutPage, LoginPage, RegisterPage, UnknownPage, CalendarPage, ContactPage,
} from '../pages';

function Routes() {
  return (
    <RoutesComponent>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<UnknownPage />} />
    </RoutesComponent>
  );
}
export default Routes;
