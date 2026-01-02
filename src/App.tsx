import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import { AuthGateway } from './pages/AuthGateway';
import { Home } from './pages/Home';
import { SubjectPage } from './pages/Subject';
import { CoursePage } from './pages/Course';
import { LessonPage } from './pages/Lesson';
import { DashboardPage } from './pages/Dashboard';
import { SettingsPage } from './pages/Settings';
import { CoursesPage } from './pages/Courses';
import { ProtectedRoute } from './components/ProtectedRoute';
import NotFound from "./pages/NotFound";
import { TermsOfServicePage } from './pages/TermsOfService';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthGateway />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
            <Route path="/subject/:slug" element={<SubjectPage />} />
            <Route path="/course/:slug" element={<CoursePage />} />
            <Route path="/lesson/:id" element={<ProtectedRoute><LessonPage /></ProtectedRoute>} />
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
