const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">MONT</span>
              <span className="text-accent">FORT</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Global commodity trading and asset investment excellence
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#trading" className="hover:text-accent transition-colors">Trading</a></li>
              <li><a href="#investments" className="hover:text-accent transition-colors">Investments</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-4">Locations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Dubai, UAE</li>
              <li>Singapore</li>
              <li>Zurich, Switzerland</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@montfort.com</li>
              <li>+971 4 XXX XXXX</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 MontFort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
