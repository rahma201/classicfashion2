import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

import Home from '@/pages/home';
import WhoWeAre from '@/pages/who-we-are';
import WhatWeDo from '@/pages/what-we-do';
import HowWeDo from '@/pages/how-we-do';
import WhereWeDo from '@/pages/where-we-do';
import Sustainability from '@/pages/sustainability';
import Blog from '@/pages/blog';
import RFQ from '@/pages/rfq';
import Contact from '@/pages/contact';
import ThankYou from '@/pages/thank-you';
import Careers from '@/pages/careers';
import Certifications from '@/pages/certifications';
import CaseStudies from '@/pages/case-studies';
import AwardsPress from '@/pages/awards-press';

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/who-we-are" component={WhoWeAre} />
          <Route path="/what-we-do" component={WhatWeDo} />
          <Route path="/how-we-do" component={HowWeDo} />
          <Route path="/where-we-do" component={WhereWeDo} />
          <Route path="/sustainability" component={Sustainability} />
          <Route path="/blog" component={Blog} />
          <Route path="/rfq" component={RFQ} />
          <Route path="/contact" component={Contact} />
          <Route path="/thank-you" component={ThankYou} />
          <Route path="/careers" component={Careers} />
          <Route path="/certifications" component={Certifications} />
          <Route path="/case-studies" component={CaseStudies} />
          <Route path="/awards-press" component={AwardsPress} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
