import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
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
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/projects" component={Projects} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/sponsors" component={Sponsors} />
        <Route path="/contact" component={Contact} />
        <Route path="/resources" component={Resources} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
