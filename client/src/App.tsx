import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "@/lib/protected-route";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Team from "@/pages/Team";
import Projects from "@/pages/Projects";
import Gallery from "@/pages/Gallery";
import Schedule from "@/pages/Schedule";
import Sponsors from "@/pages/Sponsors";
import Contact from "@/pages/Contact";
import Resources from "@/pages/Resources";
import Store from "@/pages/Store";
import AuthPage from "@/pages/auth-page";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <ProtectedRoute path="/" component={Home} />
        <ProtectedRoute path="/about" component={About} />
        <ProtectedRoute path="/team" component={Team} />
        <ProtectedRoute path="/projects" component={Projects} />
        <ProtectedRoute path="/gallery" component={Gallery} />
        <ProtectedRoute path="/schedule" component={Schedule} />
        <ProtectedRoute path="/sponsors" component={Sponsors} />
        <ProtectedRoute path="/contact" component={Contact} />
        <ProtectedRoute path="/resources" component={Resources} />
        <ProtectedRoute path="/store" component={Store} />
        <Route path="/auth" component={AuthPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
