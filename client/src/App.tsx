import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Layout from "@/components/Layout";
import PageTransition from "@/components/page-transition";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Team from "@/pages/Team";
import Projects from "@/pages/Projects";
import Stats from "@/pages/Stats";
import Gallery from "@/pages/Gallery";
import Schedule from "@/pages/Schedule";
import Sponsors from "@/pages/Sponsors";
import Contact from "@/pages/Contact";
import Resources from "@/pages/Resources";
import Store from "@/pages/Store";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <ScrollToTop />
      <PageTransition>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route path="/projects" component={Projects} />
          <Route path="/stats" component={Stats} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/sponsors" component={Sponsors} />
          <Route path="/contact" component={Contact} />
          <Route path="/resources" component={Resources} />
          <Route path="/store" component={Store} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route component={NotFound} />
        </Switch>
      </PageTransition>
    </Layout>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
